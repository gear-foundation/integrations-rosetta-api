import { BN, isHex } from '@polkadot/util';
import { deriveAddress } from '@substrate/txwrapper-core';
import { getTxHash } from '@substrate/txwrapper-core/lib/core/construct';
import { nodeRequest } from 'gear-util';
import {
  AccountIdentifier,
  Amount,
  ConstructionCombineRequest,
  ConstructionCombineResponse,
  ConstructionDeriveRequest,
  ConstructionDeriveResponse,
  ConstructionHashRequest,
  ConstructionMetadataRequest,
  ConstructionMetadataResponse,
  ConstructionParseRequest,
  ConstructionParseResponse,
  ConstructionPayloadsRequest,
  ConstructionPayloadsResponse,
  ConstructionPreprocessRequest,
  ConstructionPreprocessResponse,
  ConstructionSubmitRequest,
  Operation,
  OperationIdentifier,
  TransactionIdentifierResponse,
} from 'rosetta-client';

import {
  constructTx,
  ApiError,
  throwError,
  getNetworkIdent,
  constructSignedTx,
  parseTransaction,
  getHexPrefixedAddress,
  getNonHexPrefixedAddress,
} from '../helpers';
import config from '../config';
import logger from '../logger';
import { ApiRequest } from '../types';

/**
 * Derive an AccountIdentifier from a PublicKey
 * Derive returns the AccountIdentifier associated with a public key. Blockchains that require an on-chain action to create an account should not implement this method.
 *
 * constructionDeriveRequest ConstructionDeriveRequest
 * returns ConstructionDeriveResponse
 * */
const constructionDerive = async ({
  body: { network_identifier, public_key },
}: ApiRequest<ConstructionDeriveRequest>) => {
  const { ss58Format } = getNetworkIdent(network_identifier);

  try {
    const address = deriveAddress(getHexPrefixedAddress(public_key.hex_bytes), ss58Format);
    const account_identifier = {
      address,
    };

    return ConstructionDeriveResponse.constructFromObject({ address, account_identifier });
  } catch (error) {
    throwError(ApiError.INVALID_ACCOUNT_ADDRESS);
  }
};

/**
 * Create a Request to Fetch Metadata
 * Preprocess is called prior to `/construction/payloads` to construct a request for any metadata that is needed for transaction construction given (i.e. account nonce).
 * The `options` object returned from this endpoint will be sent to the `/construction/metadata` endpoint UNMODIFIED by the caller (in an offline execution environment).
 * If your Construction API implementation has configuration options, they MUST be specified in the `/construction/preprocess` request (in the `metadata` field).
 *
 * constructionPreprocessRequest ConstructionPreprocessRequest
 * returns ConstructionPreprocessResponse
 * */
const constructionPreprocess = async ({ body: { operations } }: ApiRequest<ConstructionPreprocessRequest>) => {
  if (operations.length !== 2) {
    throwError(ApiError.INVALID_OPERATIONS_LENGTH);
  }

  const address = operations.find(({ amount: { value } }) => new BN(value).isNeg()).account.address;

  const sender = new AccountIdentifier(getNonHexPrefixedAddress(address));

  const required_public_keys = [sender];

  return ConstructionPreprocessResponse.constructFromObject({ required_public_keys });
};

/**
 * Get Metadata for Transaction Construction
 * Get any information required to construct a transaction for a specific network.
 * Metadata returned here could be a recent hash to use, an account sequence number, or even arbitrary chain state.
 * The request used when calling this endpoint is created by calling `/construction/preprocess` in an offline environment.
 * You should NEVER assume that the request sent to this endpoint will be created by the caller or populated with any custom parameters.
 * This must occur in `/construction/preprocess`. It is important to clarify that this endpoint should not pre-construct any transactions for the client (this should happen in `/construction/payloads`).
 * This endpoint is left purposely unstructured because of the wide scope of metadata that could be required.
 *
 * constructionMetadataRequest ConstructionMetadataRequest
 * returns ConstructionMetadataResponse
 * */
const constructionMetadata = async ({
  body: { network_identifier, public_keys },
}: ApiRequest<ConstructionMetadataRequest>) => {
  if (config.MODE.isOffline) {
    throwError(ApiError.NOT_AVAILABLE_OFFLINE);
  }
  const { api } = getNetworkIdent(network_identifier);

  const pk = getHexPrefixedAddress(public_keys[0].hex_bytes);

  return new ConstructionMetadataResponse(await api.getSigningInfo(pk));
};

/**
 * Generate an Unsigned Transaction and Signing Payloads
 * Payloads is called with an array of operations and the response from `/construction/metadata`.
 * It returns an unsigned transaction blob and a collection of payloads that must be signed by particular AccountIdentifiers using a certain SignatureType.
 * The array of operations provided in transaction construction often times can not specify all \"effects\" of a transaction (consider invoked transactions in Ethereum).
 * However, they can deterministically specify the \"intent\" of the transaction, which is sufficient for construction.
 * For this reason, parsing the corresponding transaction in the Data API (when it lands on chain) will contain a superset of whatever operations were provided during construction.
 *
 * constructionPayloadsRequest ConstructionPayloadsRequest
 * returns ConstructionPayloadsResponse
 * */
const constructionPayloads = async ({
  body: { operations, network_identifier, metadata },
}: ApiRequest<ConstructionPayloadsRequest>) => {
  const { nonce, blockHash, blockNumber, eraPeriod } = metadata;

  const networkIdent = getNetworkIdent(network_identifier);

  if (operations.length !== 2) {
    throwError(ApiError.INVALID_OPERATIONS_LENGTH);
  }

  const fromOp = operations.find(({ amount: { value } }) => new BN(value).isNeg());
  const toOp = operations.find(({ amount: { value } }) => !new BN(value).isNeg());

  const { value } = toOp.amount;

  const dest = getHexPrefixedAddress(toOp.account.address);
  let source = getHexPrefixedAddress(fromOp.account.address);

  const txParams = {
    dest,
    value,
    source,
    blockHash,
    blockNumber,
    eraPeriod,
    nonce,
  };

  const { unsignedTx, signingPayload } = constructTx({
    ...txParams,
    networkIdent,
  });

  const payloads = [
    {
      account_identifier: new AccountIdentifier(getNonHexPrefixedAddress(source)),
      hex_bytes: signingPayload,
      signature_type: 'ed25519',
    },
  ];

  return new ConstructionPayloadsResponse(unsignedTx, payloads);
};

/**
 * Parse a Transaction
 * Parse is called on both unsigned and signed transactions to understand the intent of the formulated transaction.
 * This is run as a sanity check before signing (after `/construction/payloads`) and before broadcast (after `/construction/combine`).
 *
 * constructionParseRequest ConstructionParseRequest
 * returns ConstructionParseResponse
 * */
const constructionParse = async ({
  body: { network_identifier, signed, transaction },
}: ApiRequest<ConstructionParseRequest>) => {
  const networkIdent = getNetworkIdent(network_identifier);

  const { source, dest, value } = parseTransaction(transaction, signed, networkIdent);

  // Deconstruct transaction into operations
  const operations = [
    Operation.constructFromObject({
      operation_identifier: new OperationIdentifier(0),
      type: 'Transfer',
      account: new AccountIdentifier(getNonHexPrefixedAddress(source)),
      amount: new Amount(new BN(value).neg().toString(), networkIdent.currency),
    }),
    Operation.constructFromObject({
      operation_identifier: new OperationIdentifier(1),
      type: 'Transfer',
      account: new AccountIdentifier(getNonHexPrefixedAddress(dest)),
      amount: new Amount(value.toString(), networkIdent.currency),
    }),
  ];

  const signers = signed ? [getNonHexPrefixedAddress(source)] : [];

  const response = new ConstructionParseResponse(operations);
  response.signers = signers;
  response.account_identifier_signers = signers.map((signer) => new AccountIdentifier(signer));
  return response;
};

/**
 * Create Network Transaction from Signatures
 * Combine creates a network-specific transaction from an unsigned transaction and an array of provided signatures. The signed transaction returned from this method will be sent to the `/construction/submit` endpoint by the caller.
 *
 * constructionCombineRequest ConstructionCombineRequest
 * returns ConstructionCombineResponse
 * */
const constructionCombine = async ({
  body: {
    network_identifier,
    unsigned_transaction,
    signatures: [{ hex_bytes, signature_type }],
  },
}: ApiRequest<ConstructionCombineRequest>) => {
  const networkIdent = getNetworkIdent(network_identifier);

  if (signature_type.toLowerCase() !== 'ed25519') {
    throwError(ApiError.SIG_TYPE_NOT_SUPPORTED);
  }

  const tx = constructSignedTx(unsigned_transaction, hex_bytes, networkIdent);

  return new ConstructionCombineResponse(tx);
};

/**
 * Get the Hash of a Signed Transaction
 * TransactionHash returns the network-specific transaction hash for a signed transaction.
 *
 * constructionHashRequest ConstructionHashRequest
 * returns TransactionIdentifierResponse
 * */
const constructionHash = async ({ body: { signed_transaction } }: ApiRequest<ConstructionHashRequest>) => {
  const transactionHashHex = getTxHash(signed_transaction);

  return new TransactionIdentifierResponse({
    hash: transactionHashHex,
  });
};

/**
 * Submit a Signed Transaction
 * Submit a pre-signed transaction to the node.
 * This call should not block on the transaction being included in a block.
 * Rather, it should return immediately with an indication of whether or not the transaction was included in the mempool.
 * The transaction submission response should only return a 200 status if the submitted transaction could be included in the mempool.
 * Otherwise, it should return an error.
 *
 * constructionSubmitRequest ConstructionSubmitRequest
 * returns TransactionIdentifierResponse
 * */
const constructionSubmit = async ({
  body: { network_identifier, signed_transaction },
}: ApiRequest<ConstructionSubmitRequest>) => {
  if (config.MODE.isOffline) {
    throwError(ApiError.NOT_AVAILABLE_OFFLINE);
  }
  const networkIdent = getNetworkIdent(network_identifier);

  try {
    const { result } = await nodeRequest(networkIdent.httpAddress, 'author_submitExtrinsic', [signed_transaction]);
    return new TransactionIdentifierResponse({ hash: result });
  } catch (e) {
    if (e.message === 'Transaction is outdated') {
      throwError(ApiError.TRANSACTION_IS_OUTDATED);
    }
    if (e.message === 'Transaction has a bad signature') {
      throwError(ApiError.TRANSACTION_BAD_SIG);
    }
    logger.error(null, { error: e });
    throwError(ApiError.BROADCAST_TRANSACTION);
  }
};

export default {
  constructionCombine,
  constructionDerive,
  constructionHash,
  constructionMetadata,
  constructionParse,
  constructionPayloads,
  constructionPreprocess,
  constructionSubmit,
};
