export default Transaction;
/**
 * The Transaction model module.
 * @module model/Transaction
 * @version 1.4.13
 */
declare class Transaction {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, transactionIdentifier: any, operations: any): void;
    /**
     * Constructs a <code>Transaction</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Transaction} obj Optional instance to populate.
     * @return {module:model/Transaction} The populated <code>Transaction</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>Transaction</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Transaction</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>Transaction</code>.
     * Transactions contain an array of Operations that are attributable to the same TransactionIdentifier.
     * @alias module:model/Transaction
     * @param transactionIdentifier {module:model/TransactionIdentifier}
     * @param operations {Array.<module:model/Operation>}
     */
    constructor(transactionIdentifier: any, operations: Array<NodeModule>);
    transaction_identifier: any;
    operations: any;
    related_transactions: any;
    metadata: any;
}
declare namespace Transaction {
    const RequiredProperties: string[];
}
