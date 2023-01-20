export default AccountBalanceRequest;
/**
 * The AccountBalanceRequest model module.
 * @module model/AccountBalanceRequest
 * @version 1.4.13
 */
declare class AccountBalanceRequest {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, networkIdentifier: any, accountIdentifier: any): void;
    /**
     * Constructs a <code>AccountBalanceRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AccountBalanceRequest} obj Optional instance to populate.
     * @return {module:model/AccountBalanceRequest} The populated <code>AccountBalanceRequest</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>AccountBalanceRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AccountBalanceRequest</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>AccountBalanceRequest</code>.
     * An AccountBalanceRequest is utilized to make a balance request on the /account/balance endpoint. If the block_identifier is populated, a historical balance query should be performed.
     * @alias module:model/AccountBalanceRequest
     * @param networkIdentifier {module:model/NetworkIdentifier}
     * @param accountIdentifier {module:model/AccountIdentifier}
     */
    constructor(networkIdentifier: any, accountIdentifier: any);
    network_identifier: any;
    account_identifier: any;
    block_identifier: any;
    currencies: any;
}
declare namespace AccountBalanceRequest {
    const RequiredProperties: string[];
}
