/**
* Call service.
* @module api/CallApi
* @version 1.4.13
*/
export default class CallApi {
    /**
    * Constructs a new CallApi.
    * @alias module:api/CallApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient?: any);
    apiClient: any;
    /**
     * Callback function to receive the result of the call operation.
     * @callback module:api/CallApi~callCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CallResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */
    /**
     * Make a Network-Specific Procedure Call
     * Call invokes an arbitrary, network-specific procedure call with network-specific parameters. The guidance for what this endpoint should or could do is purposely left vague. In Ethereum, this could be used to invoke `eth_call` to implement an entire Rosetta API interface for some smart contract that is not parsed by the implementation creator (like a DEX). This endpoint could also be used to provide access to data that does not map to any Rosetta models instead of requiring an integrator to use some network-specific SDK and call some network-specific endpoint (like surfacing staking parameters). Call is NOT a replacement for implementing Rosetta API endpoints or mapping network-specific data to Rosetta models. Rather, it enables developers to build additional Rosetta API interfaces for things they care about without introducing complexity into a base-level Rosetta implementation. Simply put, imagine that the average integrator will use layered Rosetta API implementations that each surfaces unique data.
     * @param {module:model/CallRequest} callRequest
     * @param {module:api/CallApi~callCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CallResponse}
     */
    call(callRequest: any, callback: any): any;
}
