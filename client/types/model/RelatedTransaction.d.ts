export default RelatedTransaction;
/**
 * The RelatedTransaction model module.
 * @module model/RelatedTransaction
 * @version 1.4.13
 */
declare class RelatedTransaction {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, transactionIdentifier: any, direction: any): void;
    /**
     * Constructs a <code>RelatedTransaction</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RelatedTransaction} obj Optional instance to populate.
     * @return {module:model/RelatedTransaction} The populated <code>RelatedTransaction</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>RelatedTransaction</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RelatedTransaction</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>RelatedTransaction</code>.
     * The related_transaction allows implementations to link together multiple transactions. An unpopulated network identifier indicates that the related transaction is on the same network.
     * @alias module:model/RelatedTransaction
     * @param transactionIdentifier {module:model/TransactionIdentifier}
     * @param direction {module:model/Direction}
     */
    constructor(transactionIdentifier: any, direction: any);
    network_identifier: any;
    transaction_identifier: any;
    direction: any;
}
declare namespace RelatedTransaction {
    const RequiredProperties: string[];
}
