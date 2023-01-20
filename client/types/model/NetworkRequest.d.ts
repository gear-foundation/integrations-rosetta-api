export default NetworkRequest;
/**
 * The NetworkRequest model module.
 * @module model/NetworkRequest
 * @version 1.4.13
 */
declare class NetworkRequest {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, networkIdentifier: any): void;
    /**
     * Constructs a <code>NetworkRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NetworkRequest} obj Optional instance to populate.
     * @return {module:model/NetworkRequest} The populated <code>NetworkRequest</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>NetworkRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>NetworkRequest</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>NetworkRequest</code>.
     * A NetworkRequest is utilized to retrieve some data specific exclusively to a NetworkIdentifier.
     * @alias module:model/NetworkRequest
     * @param networkIdentifier {module:model/NetworkIdentifier}
     */
    constructor(networkIdentifier: any);
    network_identifier: any;
    metadata: any;
}
declare namespace NetworkRequest {
    const RequiredProperties: string[];
}
