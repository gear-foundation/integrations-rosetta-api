export default ConstructionSubmitRequest;
/**
 * The ConstructionSubmitRequest model module.
 * @module model/ConstructionSubmitRequest
 * @version 1.4.13
 */
declare class ConstructionSubmitRequest {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, networkIdentifier: any, signedTransaction: any): void;
    /**
     * Constructs a <code>ConstructionSubmitRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ConstructionSubmitRequest} obj Optional instance to populate.
     * @return {module:model/ConstructionSubmitRequest} The populated <code>ConstructionSubmitRequest</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>ConstructionSubmitRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ConstructionSubmitRequest</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>ConstructionSubmitRequest</code>.
     * The transaction submission request includes a signed transaction.
     * @alias module:model/ConstructionSubmitRequest
     * @param networkIdentifier {module:model/NetworkIdentifier}
     * @param signedTransaction {String}
     */
    constructor(networkIdentifier: any, signedTransaction: string);
    network_identifier: any;
    signed_transaction: any;
}
declare namespace ConstructionSubmitRequest {
    const RequiredProperties: string[];
}
