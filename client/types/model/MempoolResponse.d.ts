export default MempoolResponse;
/**
 * The MempoolResponse model module.
 * @module model/MempoolResponse
 * @version 1.4.13
 */
declare class MempoolResponse {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, transactionIdentifiers: any): void;
    /**
     * Constructs a <code>MempoolResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MempoolResponse} obj Optional instance to populate.
     * @return {module:model/MempoolResponse} The populated <code>MempoolResponse</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>MempoolResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>MempoolResponse</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>MempoolResponse</code>.
     * A MempoolResponse contains all transaction identifiers in the mempool for a particular network_identifier.
     * @alias module:model/MempoolResponse
     * @param transactionIdentifiers {Array.<module:model/TransactionIdentifier>}
     */
    constructor(transactionIdentifiers: Array<NodeModule>);
    transaction_identifiers: any;
}
declare namespace MempoolResponse {
    const RequiredProperties: string[];
}
