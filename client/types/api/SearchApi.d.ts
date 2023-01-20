/**
* Search service.
* @module api/SearchApi
* @version 1.4.13
*/
export default class SearchApi {
    /**
    * Constructs a new SearchApi.
    * @alias module:api/SearchApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient?: any);
    apiClient: any;
    /**
     * Callback function to receive the result of the searchTransactions operation.
     * @callback module:api/SearchApi~searchTransactionsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SearchTransactionsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */
    /**
     * [INDEXER] Search for Transactions
     * `/search/transactions` allows the caller to search for transactions that meet certain conditions. Some conditions include matching a transaction hash, containing an operation with a certain status, or containing an operation that affects a certain account. `/search/transactions` is considered an \"indexer\" endpoint and Rosetta implementations are not required to complete it to adhere to the Rosetta spec. However, any Rosetta \"indexer\" MUST support this endpoint.
     * @param {module:model/SearchTransactionsRequest} searchTransactionsRequest
     * @param {module:api/SearchApi~searchTransactionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SearchTransactionsResponse}
     */
    searchTransactions(searchTransactionsRequest: any, callback: any): any;
}
