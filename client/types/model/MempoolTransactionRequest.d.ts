export default MempoolTransactionRequest;
/**
 * The MempoolTransactionRequest model module.
 * @module model/MempoolTransactionRequest
 * @version 1.4.13
 */
declare class MempoolTransactionRequest {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, networkIdentifier: any, transactionIdentifier: any): void;
    /**
     * Constructs a <code>MempoolTransactionRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MempoolTransactionRequest} obj Optional instance to populate.
     * @return {module:model/MempoolTransactionRequest} The populated <code>MempoolTransactionRequest</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>MempoolTransactionRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>MempoolTransactionRequest</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>MempoolTransactionRequest</code>.
     * A MempoolTransactionRequest is utilized to retrieve a transaction from the mempool.
     * @alias module:model/MempoolTransactionRequest
     * @param networkIdentifier {module:model/NetworkIdentifier}
     * @param transactionIdentifier {module:model/TransactionIdentifier}
     */
    constructor(networkIdentifier: any, transactionIdentifier: any);
    network_identifier: any;
    transaction_identifier: any;
}
declare namespace MempoolTransactionRequest {
    const RequiredProperties: string[];
}
