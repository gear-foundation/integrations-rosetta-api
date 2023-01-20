import { ApiError, throwError } from '../helpers';

/**
 * [INDEXER] Search for Transactions
 * `/search/transactions` allows the caller to search for transactions that meet certain conditions. Some conditions include matching a transaction hash, containing an operation with a certain status, or containing an operation that affects a certain account. `/search/transactions` is considered an \"indexer\" endpoint and Rosetta implementations are not required to complete it to adhere to the Rosetta spec. However, any Rosetta \"indexer\" MUST support this endpoint.
 *
 * searchTransactionsRequest SearchTransactionsRequest
 * returns SearchTransactionsResponse
 * */
const searchTransactions = ({ searchTransactionsRequest }) => {
  //TODO
  throwError(ApiError.NOT_IMPLEMENTED);
};

export default {
  searchTransactions,
};
