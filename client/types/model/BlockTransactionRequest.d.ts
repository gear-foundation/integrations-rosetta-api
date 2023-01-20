export default BlockTransactionRequest;
/**
 * The BlockTransactionRequest model module.
 * @module model/BlockTransactionRequest
 * @version 1.4.13
 */
declare class BlockTransactionRequest {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, networkIdentifier: any, blockIdentifier: any, transactionIdentifier: any): void;
    /**
     * Constructs a <code>BlockTransactionRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BlockTransactionRequest} obj Optional instance to populate.
     * @return {module:model/BlockTransactionRequest} The populated <code>BlockTransactionRequest</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>BlockTransactionRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BlockTransactionRequest</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>BlockTransactionRequest</code>.
     * A BlockTransactionRequest is used to fetch a Transaction included in a block that is not returned in a BlockResponse.
     * @alias module:model/BlockTransactionRequest
     * @param networkIdentifier {module:model/NetworkIdentifier}
     * @param blockIdentifier {module:model/BlockIdentifier}
     * @param transactionIdentifier {module:model/TransactionIdentifier}
     */
    constructor(networkIdentifier: any, blockIdentifier: any, transactionIdentifier: any);
    network_identifier: any;
    block_identifier: any;
    transaction_identifier: any;
}
declare namespace BlockTransactionRequest {
    const RequiredProperties: string[];
}
