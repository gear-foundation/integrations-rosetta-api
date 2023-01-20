export default BlockTransactionResponse;
/**
 * The BlockTransactionResponse model module.
 * @module model/BlockTransactionResponse
 * @version 1.4.13
 */
declare class BlockTransactionResponse {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, transaction: any): void;
    /**
     * Constructs a <code>BlockTransactionResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BlockTransactionResponse} obj Optional instance to populate.
     * @return {module:model/BlockTransactionResponse} The populated <code>BlockTransactionResponse</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>BlockTransactionResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BlockTransactionResponse</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>BlockTransactionResponse</code>.
     * A BlockTransactionResponse contains information about a block transaction.
     * @alias module:model/BlockTransactionResponse
     * @param transaction {module:model/Transaction}
     */
    constructor(transaction: any);
    transaction: any;
}
declare namespace BlockTransactionResponse {
    const RequiredProperties: string[];
}
