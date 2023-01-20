export default Coin;
/**
 * The Coin model module.
 * @module model/Coin
 * @version 1.4.13
 */
declare class Coin {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, coinIdentifier: any, amount: any): void;
    /**
     * Constructs a <code>Coin</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Coin} obj Optional instance to populate.
     * @return {module:model/Coin} The populated <code>Coin</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>Coin</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Coin</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>Coin</code>.
     * Coin contains its unique identifier and the amount it represents.
     * @alias module:model/Coin
     * @param coinIdentifier {module:model/CoinIdentifier}
     * @param amount {module:model/Amount}
     */
    constructor(coinIdentifier: any, amount: any);
    coin_identifier: any;
    amount: any;
}
declare namespace Coin {
    const RequiredProperties: string[];
}
