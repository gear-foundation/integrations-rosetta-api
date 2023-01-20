/**
* Construction service.
* @module api/ConstructionApi
* @version 1.4.13
*/
export default class ConstructionApi {
    /**
    * Constructs a new ConstructionApi.
    * @alias module:api/ConstructionApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient?: any);
    apiClient: any;
    /**
     * Callback function to receive the result of the constructionCombine operation.
     * @callback module:api/ConstructionApi~constructionCombineCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ConstructionCombineResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */
    /**
     * Create Network Transaction from Signatures
     * Combine creates a network-specific transaction from an unsigned transaction and an array of provided signatures. The signed transaction returned from this method will be sent to the `/construction/submit` endpoint by the caller.
     * @param {module:model/ConstructionCombineRequest} constructionCombineRequest
     * @param {module:api/ConstructionApi~constructionCombineCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ConstructionCombineResponse}
     */
    constructionCombine(constructionCombineRequest: any, callback: any): any;
    /**
     * Callback function to receive the result of the constructionDerive operation.
     * @callback module:api/ConstructionApi~constructionDeriveCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ConstructionDeriveResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */
    /**
     * Derive an AccountIdentifier from a PublicKey
     * Derive returns the AccountIdentifier associated with a public key. Blockchains that require an on-chain action to create an account should not implement this method.
     * @param {module:model/ConstructionDeriveRequest} constructionDeriveRequest
     * @param {module:api/ConstructionApi~constructionDeriveCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ConstructionDeriveResponse}
     */
    constructionDerive(constructionDeriveRequest: any, callback: any): any;
    /**
     * Callback function to receive the result of the constructionHash operation.
     * @callback module:api/ConstructionApi~constructionHashCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TransactionIdentifierResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */
    /**
     * Get the Hash of a Signed Transaction
     * TransactionHash returns the network-specific transaction hash for a signed transaction.
     * @param {module:model/ConstructionHashRequest} constructionHashRequest
     * @param {module:api/ConstructionApi~constructionHashCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TransactionIdentifierResponse}
     */
    constructionHash(constructionHashRequest: any, callback: any): any;
    /**
     * Callback function to receive the result of the constructionMetadata operation.
     * @callback module:api/ConstructionApi~constructionMetadataCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ConstructionMetadataResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */
    /**
     * Get Metadata for Transaction Construction
     * Get any information required to construct a transaction for a specific network. Metadata returned here could be a recent hash to use, an account sequence number, or even arbitrary chain state. The request used when calling this endpoint is created by calling `/construction/preprocess` in an offline environment. You should NEVER assume that the request sent to this endpoint will be created by the caller or populated with any custom parameters. This must occur in `/construction/preprocess`. It is important to clarify that this endpoint should not pre-construct any transactions for the client (this should happen in `/construction/payloads`). This endpoint is left purposely unstructured because of the wide scope of metadata that could be required.
     * @param {module:model/ConstructionMetadataRequest} constructionMetadataRequest
     * @param {module:api/ConstructionApi~constructionMetadataCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ConstructionMetadataResponse}
     */
    constructionMetadata(constructionMetadataRequest: any, callback: any): any;
    /**
     * Callback function to receive the result of the constructionParse operation.
     * @callback module:api/ConstructionApi~constructionParseCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ConstructionParseResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */
    /**
     * Parse a Transaction
     * Parse is called on both unsigned and signed transactions to understand the intent of the formulated transaction. This is run as a sanity check before signing (after `/construction/payloads`) and before broadcast (after `/construction/combine`).
     * @param {module:model/ConstructionParseRequest} constructionParseRequest
     * @param {module:api/ConstructionApi~constructionParseCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ConstructionParseResponse}
     */
    constructionParse(constructionParseRequest: any, callback: any): any;
    /**
     * Callback function to receive the result of the constructionPayloads operation.
     * @callback module:api/ConstructionApi~constructionPayloadsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ConstructionPayloadsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */
    /**
     * Generate an Unsigned Transaction and Signing Payloads
     * Payloads is called with an array of operations and the response from `/construction/metadata`. It returns an unsigned transaction blob and a collection of payloads that must be signed by particular AccountIdentifiers using a certain SignatureType. The array of operations provided in transaction construction often times can not specify all \"effects\" of a transaction (consider invoked transactions in Ethereum). However, they can deterministically specify the \"intent\" of the transaction, which is sufficient for construction. For this reason, parsing the corresponding transaction in the Data API (when it lands on chain) will contain a superset of whatever operations were provided during construction.
     * @param {module:model/ConstructionPayloadsRequest} constructionPayloadsRequest
     * @param {module:api/ConstructionApi~constructionPayloadsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ConstructionPayloadsResponse}
     */
    constructionPayloads(constructionPayloadsRequest: any, callback: any): any;
    /**
     * Callback function to receive the result of the constructionPreprocess operation.
     * @callback module:api/ConstructionApi~constructionPreprocessCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ConstructionPreprocessResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */
    /**
     * Create a Request to Fetch Metadata
     * Preprocess is called prior to `/construction/payloads` to construct a request for any metadata that is needed for transaction construction given (i.e. account nonce). The `options` object returned from this endpoint will be sent to the `/construction/metadata` endpoint UNMODIFIED by the caller (in an offline execution environment). If your Construction API implementation has configuration options, they MUST be specified in the `/construction/preprocess` request (in the `metadata` field).
     * @param {module:model/ConstructionPreprocessRequest} constructionPreprocessRequest
     * @param {module:api/ConstructionApi~constructionPreprocessCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ConstructionPreprocessResponse}
     */
    constructionPreprocess(constructionPreprocessRequest: any, callback: any): any;
    /**
     * Callback function to receive the result of the constructionSubmit operation.
     * @callback module:api/ConstructionApi~constructionSubmitCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TransactionIdentifierResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */
    /**
     * Submit a Signed Transaction
     * Submit a pre-signed transaction to the node. This call should not block on the transaction being included in a block. Rather, it should return immediately with an indication of whether or not the transaction was included in the mempool. The transaction submission response should only return a 200 status if the submitted transaction could be included in the mempool. Otherwise, it should return an error.
     * @param {module:model/ConstructionSubmitRequest} constructionSubmitRequest
     * @param {module:api/ConstructionApi~constructionSubmitCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TransactionIdentifierResponse}
     */
    constructionSubmit(constructionSubmitRequest: any, callback: any): any;
}
