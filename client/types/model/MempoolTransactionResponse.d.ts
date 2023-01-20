export default MempoolTransactionResponse;
/**
 * The MempoolTransactionResponse model module.
 * @module model/MempoolTransactionResponse
 * @version 1.4.13
 */
declare class MempoolTransactionResponse {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, transaction: any): void;
    /**
     * Constructs a <code>MempoolTransactionResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MempoolTransactionResponse} obj Optional instance to populate.
     * @return {module:model/MempoolTransactionResponse} The populated <code>MempoolTransactionResponse</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>MempoolTransactionResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>MempoolTransactionResponse</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>MempoolTransactionResponse</code>.
     * A MempoolTransactionResponse contains an estimate of a mempool transaction. It may not be possible to know the full impact of a transaction in the mempool (ex: fee paid).
     * @alias module:model/MempoolTransactionResponse
     * @param transaction {module:model/Transaction}
     */
    constructor(transaction: any);
    transaction: any;
    metadata: any;
}
declare namespace MempoolTransactionResponse {
    const RequiredProperties: string[];
}
