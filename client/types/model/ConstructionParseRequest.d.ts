export default ConstructionParseRequest;
/**
 * The ConstructionParseRequest model module.
 * @module model/ConstructionParseRequest
 * @version 1.4.13
 */
declare class ConstructionParseRequest {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, networkIdentifier: any, signed: any, transaction: any): void;
    /**
     * Constructs a <code>ConstructionParseRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ConstructionParseRequest} obj Optional instance to populate.
     * @return {module:model/ConstructionParseRequest} The populated <code>ConstructionParseRequest</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>ConstructionParseRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ConstructionParseRequest</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>ConstructionParseRequest</code>.
     * ConstructionParseRequest is the input to the &#x60;/construction/parse&#x60; endpoint. It allows the caller to parse either an unsigned or signed transaction.
     * @alias module:model/ConstructionParseRequest
     * @param networkIdentifier {module:model/NetworkIdentifier}
     * @param signed {Boolean} Signed is a boolean indicating whether the transaction is signed.
     * @param transaction {String} This must be either the unsigned transaction blob returned by `/construction/payloads` or the signed transaction blob returned by `/construction/combine`.
     */
    constructor(networkIdentifier: any, signed: boolean, transaction: string);
    network_identifier: any;
    signed: any;
    transaction: any;
}
declare namespace ConstructionParseRequest {
    const RequiredProperties: string[];
}
