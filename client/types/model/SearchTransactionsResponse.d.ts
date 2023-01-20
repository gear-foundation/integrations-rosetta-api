export default SearchTransactionsResponse;
/**
 * The SearchTransactionsResponse model module.
 * @module model/SearchTransactionsResponse
 * @version 1.4.13
 */
declare class SearchTransactionsResponse {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, transactions: any, totalCount: any): void;
    /**
     * Constructs a <code>SearchTransactionsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SearchTransactionsResponse} obj Optional instance to populate.
     * @return {module:model/SearchTransactionsResponse} The populated <code>SearchTransactionsResponse</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>SearchTransactionsResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SearchTransactionsResponse</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>SearchTransactionsResponse</code>.
     * SearchTransactionsResponse contains an ordered collection of BlockTransactions that match the query in SearchTransactionsRequest. These BlockTransactions are sorted from most recent block to oldest block.
     * @alias module:model/SearchTransactionsResponse
     * @param transactions {Array.<module:model/BlockTransaction>} transactions is an array of BlockTransactions sorted by most recent BlockIdentifier (meaning that transactions in recent blocks appear first). If there are many transactions for a particular search, transactions may not contain all matching transactions. It is up to the caller to paginate these transactions using the max_block field.
     * @param totalCount {Number} total_count is the number of results for a given search. Callers typically use this value to concurrently fetch results by offset or to display a virtual page number associated with results.
     */
    constructor(transactions: Array<NodeModule>, totalCount: number);
    transactions: any;
    total_count: any;
    next_offset: any;
}
declare namespace SearchTransactionsResponse {
    const RequiredProperties: string[];
}
