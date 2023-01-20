/**
* Block service.
* @module api/BlockApi
* @version 1.4.13
*/
export default class BlockApi {
    /**
    * Constructs a new BlockApi.
    * @alias module:api/BlockApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient?: any);
    apiClient: any;
    /**
     * Callback function to receive the result of the block operation.
     * @callback module:api/BlockApi~blockCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BlockResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */
    /**
     * Get a Block
     * Get a block by its Block Identifier. If transactions are returned in the same call to the node as fetching the block, the response should include these transactions in the Block object. If not, an array of Transaction Identifiers should be returned so /block/transaction fetches can be done to get all transaction information. When requesting a block by the hash component of the BlockIdentifier, this request MUST be idempotent: repeated invocations for the same hash-identified block must return the exact same block contents. No such restriction is imposed when requesting a block by height, given that a chain reorg event might cause the specific block at height `n` to be set to a different one.
     * @param {module:model/BlockRequest} blockRequest
     * @param {module:api/BlockApi~blockCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BlockResponse}
     */
    block(blockRequest: any, callback: any): any;
    /**
     * Callback function to receive the result of the blockTransaction operation.
     * @callback module:api/BlockApi~blockTransactionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BlockTransactionResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */
    /**
     * Get a Block Transaction
     * Get a transaction in a block by its Transaction Identifier. This endpoint should only be used when querying a node for a block does not return all transactions contained within it. All transactions returned by this endpoint must be appended to any transactions returned by the /block method by consumers of this data. Fetching a transaction by hash is considered an Explorer Method (which is classified under the Future Work section). This method can be used to let consumers to paginate results when the  block trasactions count is too big to be returned in a single BlockResponse. Calling this endpoint requires reference to a BlockIdentifier because transaction parsing can change depending on which block contains the transaction. For example, in Bitcoin it is necessary to know which block contains a transaction to determine the destination of fee payments. Without specifying a block identifier, the node would have to infer which block to use (which could change during a re-org). Implementations that require fetching previous transactions to populate the response (ex: Previous UTXOs in Bitcoin) may find it useful to run a cache within the Rosetta server in the /data directory (on a path that does not conflict with the node).
     * @param {module:model/BlockTransactionRequest} blockTransactionRequest
     * @param {module:api/BlockApi~blockTransactionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BlockTransactionResponse}
     */
    blockTransaction(blockTransactionRequest: any, callback: any): any;
}
