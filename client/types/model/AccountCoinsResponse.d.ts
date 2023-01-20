export default AccountCoinsResponse;
/**
 * The AccountCoinsResponse model module.
 * @module model/AccountCoinsResponse
 * @version 1.4.13
 */
declare class AccountCoinsResponse {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, blockIdentifier: any, coins: any): void;
    /**
     * Constructs a <code>AccountCoinsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AccountCoinsResponse} obj Optional instance to populate.
     * @return {module:model/AccountCoinsResponse} The populated <code>AccountCoinsResponse</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>AccountCoinsResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AccountCoinsResponse</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>AccountCoinsResponse</code>.
     * AccountCoinsResponse is returned on the /account/coins endpoint and includes all unspent Coins owned by an AccountIdentifier.
     * @alias module:model/AccountCoinsResponse
     * @param blockIdentifier {module:model/BlockIdentifier}
     * @param coins {Array.<module:model/Coin>} If a blockchain is UTXO-based, all unspent Coins owned by an account_identifier should be returned alongside the balance. It is highly recommended to populate this field so that users of the Rosetta API implementation don't need to maintain their own indexer to track their UTXOs.
     */
    constructor(blockIdentifier: any, coins: Array<NodeModule>);
    block_identifier: any;
    coins: any;
    metadata: any;
}
declare namespace AccountCoinsResponse {
    const RequiredProperties: string[];
}
