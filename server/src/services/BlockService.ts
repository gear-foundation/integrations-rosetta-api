import {
  Block,
  BlockRequest,
  BlockResponse,
  BlockTransactionRequest,
  BlockTransactionResponse,
  Transaction,
  TransactionIdentifier,
} from 'rosetta-client';
import { filterEvents } from '@polkadot/api/util';
import { ApiError, getExtrinsics, getNetworkIdent, getOperations, getOperationStatus, throwError } from '../helpers';
import config from '../config';
import fs from 'fs';

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
  const { api, currency, registry } = getNetworkIdent(network_identifier);

  const [blockIdent, blockTs, _block] = await api.getBlockIdent(block_identifier.hash || block_identifier.index);

  const [parentBlockIdent] =
    blockIdent.index === 0 ? [blockIdent] : await api.getBlockIdent(_block.block.header.parentHash.toHex());

  if (block_identifier.index === 0 || block_identifier.hash === api.genesis) {
    const block = new Block(blockIdent, parentBlockIdent, blockTs, []);
    return BlockResponse.constructFromObject({ block });
  }

  const extrinsics = getExtrinsics(_block);

  const transactions = [];

  for (const tx of extrinsics) {
    const hash = tx.hash.toHex();

    const transactionIdent = new TransactionIdentifier(hash);

    const status = registry.createType('ExtrinsicStatus', { finalized: _block.hash });
    const { events } = filterEvents(tx.hash, _block, _block.events, status);

    let opStatus = getOperationStatus(events);

    const operations = getOperations({ opStatus, tx, currency, events: events });
    if (operations.length > 0) {
      transactions.push(new Transaction(transactionIdent, operations));
    }
  }

  const block = new Block(blockIdent, parentBlockIdent, blockTs, transactions);

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
  const { api, currency, registry } = getNetworkIdent(network_identifier);

  const _block = await api.getBlock(block_identifier.hash || block_identifier.index);

  const extrinsic = _block.block.extrinsics.find(
    ({ method: { section, method }, hash }) =>
      section.toLowerCase() === 'balances' &&
      ['transfer', 'transferkeepalive'].includes(method.toLowerCase()) &&
      hash.eq(transaction_identifier.hash),
  );

  if (!extrinsic) {
    throwError(ApiError.TRANSACTION_NOT_FOUND, { hash: transaction_identifier.hash });
  }

  const status = registry.createType('ExtrinsicStatus', { finalized: _block.hash });
  const { events } = filterEvents(extrinsic.hash, _block, _block.events, status);

  const opStatus = getOperationStatus(events);
  const operations = getOperations({ opStatus, tx: extrinsic, currency, events });

  return new BlockTransactionResponse(new Transaction(transaction_identifier, operations));
};

export default {
  block,
  blockTransaction,
};
