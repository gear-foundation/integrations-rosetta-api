export default SearchTransactionsRequest;
/**
 * The SearchTransactionsRequest model module.
 * @module model/SearchTransactionsRequest
 * @version 1.4.13
 */
declare class SearchTransactionsRequest {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, networkIdentifier: any): void;
    /**
     * Constructs a <code>SearchTransactionsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SearchTransactionsRequest} obj Optional instance to populate.
     * @return {module:model/SearchTransactionsRequest} The populated <code>SearchTransactionsRequest</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>SearchTransactionsRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SearchTransactionsRequest</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>SearchTransactionsRequest</code>.
     * SearchTransactionsRequest is used to search for transactions matching a set of provided conditions in canonical blocks.
     * @alias module:model/SearchTransactionsRequest
     * @param networkIdentifier {module:model/NetworkIdentifier}
     */
    constructor(networkIdentifier: any);
    network_identifier: any;
    operator: any;
    max_block: any;
    offset: any;
    limit: any;
    transaction_identifier: any;
    account_identifier: any;
    coin_identifier: any;
    currency: any;
    status: any;
    type: any;
    address: any;
    success: any;
}
declare namespace SearchTransactionsRequest {
    const RequiredProperties: string[];
}
