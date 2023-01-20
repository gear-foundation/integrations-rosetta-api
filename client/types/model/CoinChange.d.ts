export default CoinChange;
/**
 * The CoinChange model module.
 * @module model/CoinChange
 * @version 1.4.13
 */
declare class CoinChange {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, coinIdentifier: any, coinAction: any): void;
    /**
     * Constructs a <code>CoinChange</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CoinChange} obj Optional instance to populate.
     * @return {module:model/CoinChange} The populated <code>CoinChange</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>CoinChange</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CoinChange</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>CoinChange</code>.
     * CoinChange is used to represent a change in state of a some coin identified by a coin_identifier. This object is part of the Operation model and must be populated for UTXO-based blockchains. Coincidentally, this abstraction of UTXOs allows for supporting both account-based transfers and UTXO-based transfers on the same blockchain (when a transfer is account-based, don&#39;t populate this model).
     * @alias module:model/CoinChange
     * @param coinIdentifier {module:model/CoinIdentifier}
     * @param coinAction {module:model/CoinAction}
     */
    constructor(coinIdentifier: any, coinAction: any);
    coin_identifier: any;
    coin_action: any;
}
declare namespace CoinChange {
    const RequiredProperties: string[];
}
