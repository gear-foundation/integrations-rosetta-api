import { DispatchError, Event } from '@polkadot/types/interfaces';
import { u8aToBn } from '@polkadot/util';
import {
  Block,
  BlockIdentifier,
  BlockRequest,
  BlockResponse,
  BlockTransactionRequest,
  BlockTransactionResponse,
  Transaction,
  TransactionIdentifier,
} from 'rosetta-client';


import config from '../config';
import { ApiError, getNetworkIdent, getOperations, getOperationStatus, getTxsAndEvents, throwError } from '../helpers';
import logger from '../logger';
import { OperationStatus } from '../types';

interface TransactionErrorMetadata {
  pallet: string;
  error: string;
  description: string;
}

/**
 * Get a Block
 * Get a block by its Block Identifier.
 * If transactions are returned in the same call to the node as fetching the block, the response should include these transactions in the Block object.
 * If not, an array of Transaction Identifiers should be returned so /block/transaction fetches can be done to get all transaction information.
 * When requesting a block by the hash component of the BlockIdentifier, this request MUST be idempotent: repeated invocations for the same hash-identified block must return the exact same block contents.
 * No such restriction is imposed when requesting a block by height, given that a chain reorg event might cause the specific block at height `n` to be set to a different one.
 *
 * blockRequest BlockRequest
 * returns BlockResponse
 * */
const block = async ({ body: { network_identifier, block_identifier } }: { body: BlockRequest }) => {
  if (config.MODE.isOffline) {
    throwError(ApiError.NOT_AVAILABLE_OFFLINE);
  }
  const { api, currency } = getNetworkIdent(network_identifier);
  
  const [blockIdent, blockTs, _block, apiAt] = await api.getBlockIdent(block_identifier.hash || block_identifier.index);

  const parentBlockHeight = blockIdent.index - 1;
  const parentBlockHash = _block.block.header.parentHash.toHex();
  const parentBlockIdentifier = new BlockIdentifier(parentBlockHeight, parentBlockHash);

  if (block_identifier.index === 0 || block_identifier.hash === api.genesis) {
    const block = new Block(blockIdent, blockIdent, blockTs, []);
    return BlockResponse.constructFromObject({ block });
  }

  const txsEvents = getTxsAndEvents(await apiAt.query.system.events(), _block.block.extrinsics);

  const transactions = [];

  for (const { tx, events, statusEvent } of txsEvents) {
    const hash = tx.hash.toHex();
    const transactionIdent = new TransactionIdentifier(hash);

    const opStatus = getOperationStatus(statusEvent);

    const operations = await getOperations(
      { opStatus, tx, currency, events: events },
      api,
      _block.block.header.parentHash.toHex(),
    );

    if (operations.length > 0) {
      const rosettaTransaction = new Transaction(transactionIdent, operations);
      
      if (opStatus == OperationStatus.FAILURE) {
        try {
          const transactionMetadata = lookupError(statusEvent.event);
          rosettaTransaction.metadata = { error: transactionMetadata };
        } catch (err) {
          logger.error('Failed to lookup error for failed extrinsic', { error: err });
        }
      }

      transactions.push(rosettaTransaction);
    }
  }

  const block = new Block(blockIdent, parentBlockIdentifier, blockTs, transactions);
  return BlockResponse.constructFromObject({ block });
};

/**
 * Get a Block Transaction
 * Get a transaction in a block by its Transaction Identifier. This endpoint should only be used when querying a node for a block does not return all transactions contained within it. All transactions returned by this endpoint must be appended to any transactions returned by the /block method by consumers of this data. Fetching a transaction by hash is considered an Explorer Method (which is classified under the Future Work section). This method can be used to let consumers to paginate results when the  block trasactions count is too big to be returned in a single BlockResponse. Calling this endpoint requires reference to a BlockIdentifier because transaction parsing can change depending on which block contains the transaction. For example, in Bitcoin it is necessary to know which block contains a transaction to determine the destination of fee payments. Without specifying a block identifier, the node would have to infer which block to use (which could change during a re-org). Implementations that require fetching previous transactions to populate the response (ex: Previous UTXOs in Bitcoin) may find it useful to run a cache within the Rosetta server in the /data directory (on a path that does not conflict with the node).
 *
 * blockTransactionRequest BlockTransactionRequest
 * returns BlockTransactionResponse
 * */
const blockTransaction = async ({
  body: { network_identifier, block_identifier, transaction_identifier },
}: {
  body: BlockTransactionRequest;
}) => {
  if (config.MODE.isOffline) {
    throwError(ApiError.NOT_AVAILABLE_OFFLINE);
  }
  const { api, currency } = getNetworkIdent(network_identifier);

  const { block, apiAt } = await api.getBlock(block_identifier.hash || block_identifier.index);

  const txsEvents = getTxsAndEvents(
    await apiAt.query.system.events(),
    block.block.extrinsics,
    transaction_identifier.hash,
  );

  if (txsEvents.length === 0) {
    throwError(ApiError.TRANSACTION_NOT_FOUND, { hash: transaction_identifier.hash });
  }

  const { tx, events, statusEvent } = txsEvents[0];

  const opStatus = getOperationStatus(statusEvent);
  const operations = await getOperations(
    { opStatus, tx, currency, events },
    api,
    block.block.header.parentHash.toHex(),
  );

  const rosettaTransaction = new Transaction(transaction_identifier, operations);

  if (opStatus == OperationStatus.FAILURE) {
    try {
      const transactionMetadata = lookupError(statusEvent.event);
      rosettaTransaction.metadata = { error: transactionMetadata };
    } catch (err) {
      logger.error('Failed to lookup error for failed extrinsic', { error: err });
    }
  }

  return new BlockTransactionResponse(rosettaTransaction);
};

function lookupError(failureEvent: Event): TransactionErrorMetadata {
  const [error, _] = failureEvent.data;

  const dispatchError: DispatchError = error as unknown as DispatchError;

  const errorIndex = dispatchError.asModule.index.toBn();
  const errorType = u8aToBn(dispatchError.asModule.error);

  if (dispatchError.isModule) {
    const decoded = failureEvent.registry.findMetaError({ error: errorType, index: errorIndex });
    const { docs, name, section } = decoded;

    return {
      pallet: section,
      error: name,
      description: docs.join(' ')
    }
  } else {
    throw Error(`Could not lookup error using registry [Index = ${errorIndex}, Error = ${errorType}]`)
  }
}

export default {
  block,
  blockTransaction,
};
