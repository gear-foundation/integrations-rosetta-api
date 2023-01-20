export default BlockTransaction;
/**
 * The BlockTransaction model module.
 * @module model/BlockTransaction
 * @version 1.4.13
 */
declare class BlockTransaction {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, blockIdentifier: any, transaction: any): void;
    /**
     * Constructs a <code>BlockTransaction</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BlockTransaction} obj Optional instance to populate.
     * @return {module:model/BlockTransaction} The populated <code>BlockTransaction</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>BlockTransaction</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BlockTransaction</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>BlockTransaction</code>.
     * BlockTransaction contains a populated Transaction and the BlockIdentifier that contains it.
     * @alias module:model/BlockTransaction
     * @param blockIdentifier {module:model/BlockIdentifier}
     * @param transaction {module:model/Transaction}
     */
    constructor(blockIdentifier: any, transaction: any);
    block_identifier: any;
    transaction: any;
}
declare namespace BlockTransaction {
    const RequiredProperties: string[];
}
