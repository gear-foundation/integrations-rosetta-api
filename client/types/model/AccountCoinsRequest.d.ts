export default AccountCoinsRequest;
/**
 * The AccountCoinsRequest model module.
 * @module model/AccountCoinsRequest
 * @version 1.4.13
 */
declare class AccountCoinsRequest {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, networkIdentifier: any, accountIdentifier: any, includeMempool: any): void;
    /**
     * Constructs a <code>AccountCoinsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AccountCoinsRequest} obj Optional instance to populate.
     * @return {module:model/AccountCoinsRequest} The populated <code>AccountCoinsRequest</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>AccountCoinsRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AccountCoinsRequest</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>AccountCoinsRequest</code>.
     * AccountCoinsRequest is utilized to make a request on the /account/coins endpoint.
     * @alias module:model/AccountCoinsRequest
     * @param networkIdentifier {module:model/NetworkIdentifier}
     * @param accountIdentifier {module:model/AccountIdentifier}
     * @param includeMempool {Boolean} Include state from the mempool when looking up an account's unspent coins. Note, using this functionality breaks any guarantee of idempotency.
     */
    constructor(networkIdentifier: any, accountIdentifier: any, includeMempool: boolean);
    network_identifier: any;
    account_identifier: any;
    include_mempool: any;
    currencies: any;
}
declare namespace AccountCoinsRequest {
    const RequiredProperties: string[];
}
