/**
* Network service.
* @module api/NetworkApi
* @version 1.4.13
*/
export default class NetworkApi {
    /**
    * Constructs a new NetworkApi.
    * @alias module:api/NetworkApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient?: any);
    apiClient: any;
    /**
     * Callback function to receive the result of the networkList operation.
     * @callback module:api/NetworkApi~networkListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NetworkListResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */
    /**
     * Get List of Available Networks
     * This endpoint returns a list of NetworkIdentifiers that the Rosetta server supports.
     * @param {module:model/MetadataRequest} metadataRequest
     * @param {module:api/NetworkApi~networkListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/NetworkListResponse}
     */
    networkList(metadataRequest: any, callback: any): any;
    /**
     * Callback function to receive the result of the networkOptions operation.
     * @callback module:api/NetworkApi~networkOptionsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NetworkOptionsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */
    /**
     * Get Network Options
     * This endpoint returns the version information and allowed network-specific types for a NetworkIdentifier. Any NetworkIdentifier returned by /network/list should be accessible here. Because options are retrievable in the context of a NetworkIdentifier, it is possible to define unique options for each network.
     * @param {module:model/NetworkRequest} networkRequest
     * @param {module:api/NetworkApi~networkOptionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/NetworkOptionsResponse}
     */
    networkOptions(networkRequest: any, callback: any): any;
    /**
     * Callback function to receive the result of the networkStatus operation.
     * @callback module:api/NetworkApi~networkStatusCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NetworkStatusResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */
    /**
     * Get Network Status
     * This endpoint returns the current status of the network requested. Any NetworkIdentifier returned by /network/list should be accessible here.
     * @param {module:model/NetworkRequest} networkRequest
     * @param {module:api/NetworkApi~networkStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/NetworkStatusResponse}
     */
    networkStatus(networkRequest: any, callback: any): any;
}
