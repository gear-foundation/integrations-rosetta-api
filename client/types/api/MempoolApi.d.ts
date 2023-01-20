/**
* Mempool service.
* @module api/MempoolApi
* @version 1.4.13
*/
export default class MempoolApi {
    /**
    * Constructs a new MempoolApi.
    * @alias module:api/MempoolApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient?: any);
    apiClient: any;
    /**
     * Callback function to receive the result of the mempool operation.
     * @callback module:api/MempoolApi~mempoolCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MempoolResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */
    /**
     * Get All Mempool Transactions
     * Get all Transaction Identifiers in the mempool
     * @param {module:model/NetworkRequest} networkRequest
     * @param {module:api/MempoolApi~mempoolCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MempoolResponse}
     */
    mempool(networkRequest: any, callback: any): any;
    /**
     * Callback function to receive the result of the mempoolTransaction operation.
     * @callback module:api/MempoolApi~mempoolTransactionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MempoolTransactionResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */
    /**
     * Get a Mempool Transaction
     * Get a transaction in the mempool by its Transaction Identifier. This is a separate request than fetching a block transaction (/block/transaction) because some blockchain nodes need to know that a transaction query is for something in the mempool instead of a transaction in a block. Transactions may not be fully parsable until they are in a block (ex: may not be possible to determine the fee to pay before a transaction is executed). On this endpoint, it is ok that returned transactions are only estimates of what may actually be included in a block.
     * @param {module:model/MempoolTransactionRequest} mempoolTransactionRequest
     * @param {module:api/MempoolApi~mempoolTransactionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MempoolTransactionResponse}
     */
    mempoolTransaction(mempoolTransactionRequest: any, callback: any): any;
}
