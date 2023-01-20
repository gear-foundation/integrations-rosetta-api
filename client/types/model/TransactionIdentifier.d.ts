export default TransactionIdentifier;
/**
 * The TransactionIdentifier model module.
 * @module model/TransactionIdentifier
 * @version 1.4.13
 */
declare class TransactionIdentifier {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, hash: any): void;
    /**
     * Constructs a <code>TransactionIdentifier</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransactionIdentifier} obj Optional instance to populate.
     * @return {module:model/TransactionIdentifier} The populated <code>TransactionIdentifier</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>TransactionIdentifier</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TransactionIdentifier</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>TransactionIdentifier</code>.
     * The transaction_identifier uniquely identifies a transaction in a particular network and block or in the mempool.
     * @alias module:model/TransactionIdentifier
     * @param hash {String} Any transactions that are attributable only to a block (ex: a block event) should use the hash of the block as the identifier.  This should be normalized according to the case specified in the transaction_hash_case in network options.
     */
    constructor(hash: string);
    hash: any;
}
declare namespace TransactionIdentifier {
    const RequiredProperties: string[];
}
