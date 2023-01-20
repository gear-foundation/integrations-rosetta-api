export default ConstructionMetadataResponse;
/**
 * The ConstructionMetadataResponse model module.
 * @module model/ConstructionMetadataResponse
 * @version 1.4.13
 */
declare class ConstructionMetadataResponse {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, metadata: any): void;
    /**
     * Constructs a <code>ConstructionMetadataResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ConstructionMetadataResponse} obj Optional instance to populate.
     * @return {module:model/ConstructionMetadataResponse} The populated <code>ConstructionMetadataResponse</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>ConstructionMetadataResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ConstructionMetadataResponse</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>ConstructionMetadataResponse</code>.
     * The ConstructionMetadataResponse returns network-specific metadata used for transaction construction. Optionally, the implementer can return the suggested fee associated with the transaction being constructed. The caller may use this info to adjust the intent of the transaction or to create a transaction with a different account that can pay the suggested fee. Suggested fee is an array in case fee payment must occur in multiple currencies.
     * @alias module:model/ConstructionMetadataResponse
     * @param metadata {Object}
     */
    constructor(metadata: any);
    metadata: any;
    suggested_fee: any;
}
declare namespace ConstructionMetadataResponse {
    const RequiredProperties: string[];
}
