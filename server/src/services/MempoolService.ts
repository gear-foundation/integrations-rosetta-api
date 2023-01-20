import { ApiError, throwError } from '../helpers';

/**
 * Get All Mempool Transactions
 * Get all Transaction Identifiers in the mempool
 *
 * networkRequest NetworkRequest
 * returns MempoolResponse
 * */
const mempool = ({ networkRequest }) => {
  throwError(ApiError.NOT_IMPLEMENTED);
};
/**
 * Get a Mempool Transaction
 * Get a transaction in the mempool by its Transaction Identifier. This is a separate request than fetching a block transaction (/block/transaction) because some blockchain nodes need to know that a transaction query is for something in the mempool instead of a transaction in a block. Transactions may not be fully parsable until they are in a block (ex: may not be possible to determine the fee to pay before a transaction is executed). On this endpoint, it is ok that returned transactions are only estimates of what may actually be included in a block.
 *
 * mempoolTransactionRequest MempoolTransactionRequest
 * returns MempoolTransactionResponse
 * */
const mempoolTransaction = ({ mempoolTransactionRequest }) => {
  throwError(ApiError.NOT_IMPLEMENTED);
};

export default {
  mempool,
  mempoolTransaction,
};
