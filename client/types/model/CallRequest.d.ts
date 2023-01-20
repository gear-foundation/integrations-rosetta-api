export default CallRequest;
/**
 * The CallRequest model module.
 * @module model/CallRequest
 * @version 1.4.13
 */
declare class CallRequest {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, networkIdentifier: any, method: any, parameters: any): void;
    /**
     * Constructs a <code>CallRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CallRequest} obj Optional instance to populate.
     * @return {module:model/CallRequest} The populated <code>CallRequest</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>CallRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CallRequest</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>CallRequest</code>.
     * CallRequest is the input to the &#x60;/call&#x60; endpoint.
     * @alias module:model/CallRequest
     * @param networkIdentifier {module:model/NetworkIdentifier}
     * @param method {String} Method is some network-specific procedure call. This method could map to a network-specific RPC endpoint, a method in an SDK generated from a smart contract, or some hybrid of the two. The implementation must define all available methods in the Allow object. However, it is up to the caller to determine which parameters to provide when invoking `/call`.
     * @param parameters {Object} Parameters is some network-specific argument for a method. It is up to the caller to determine which parameters to provide when invoking `/call`.
     */
    constructor(networkIdentifier: any, method: string, parameters: any);
    network_identifier: any;
    method: any;
    parameters: any;
}
declare namespace CallRequest {
    const RequiredProperties: string[];
}
