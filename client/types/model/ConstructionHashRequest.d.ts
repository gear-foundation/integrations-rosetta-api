export default ConstructionHashRequest;
/**
 * The ConstructionHashRequest model module.
 * @module model/ConstructionHashRequest
 * @version 1.4.13
 */
declare class ConstructionHashRequest {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, networkIdentifier: any, signedTransaction: any): void;
    /**
     * Constructs a <code>ConstructionHashRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ConstructionHashRequest} obj Optional instance to populate.
     * @return {module:model/ConstructionHashRequest} The populated <code>ConstructionHashRequest</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>ConstructionHashRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ConstructionHashRequest</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>ConstructionHashRequest</code>.
     * ConstructionHashRequest is the input to the &#x60;/construction/hash&#x60; endpoint.
     * @alias module:model/ConstructionHashRequest
     * @param networkIdentifier {module:model/NetworkIdentifier}
     * @param signedTransaction {String}
     */
    constructor(networkIdentifier: any, signedTransaction: string);
    network_identifier: any;
    signed_transaction: any;
}
declare namespace ConstructionHashRequest {
    const RequiredProperties: string[];
}
