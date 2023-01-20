export default ConstructionDeriveRequest;
/**
 * The ConstructionDeriveRequest model module.
 * @module model/ConstructionDeriveRequest
 * @version 1.4.13
 */
declare class ConstructionDeriveRequest {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, networkIdentifier: any, publicKey: any): void;
    /**
     * Constructs a <code>ConstructionDeriveRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ConstructionDeriveRequest} obj Optional instance to populate.
     * @return {module:model/ConstructionDeriveRequest} The populated <code>ConstructionDeriveRequest</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>ConstructionDeriveRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ConstructionDeriveRequest</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>ConstructionDeriveRequest</code>.
     * ConstructionDeriveRequest is passed to the &#x60;/construction/derive&#x60; endpoint. Network is provided in the request because some blockchains have different address formats for different networks. Metadata is provided in the request because some blockchains allow for multiple address types (i.e. different address for validators vs normal accounts).
     * @alias module:model/ConstructionDeriveRequest
     * @param networkIdentifier {module:model/NetworkIdentifier}
     * @param publicKey {module:model/PublicKey}
     */
    constructor(networkIdentifier: any, publicKey: any);
    network_identifier: any;
    public_key: any;
    metadata: any;
}
declare namespace ConstructionDeriveRequest {
    const RequiredProperties: string[];
}
