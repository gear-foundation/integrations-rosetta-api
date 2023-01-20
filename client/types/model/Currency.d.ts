export default Currency;
/**
 * The Currency model module.
 * @module model/Currency
 * @version 1.4.13
 */
declare class Currency {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, symbol: any, decimals: any): void;
    /**
     * Constructs a <code>Currency</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Currency} obj Optional instance to populate.
     * @return {module:model/Currency} The populated <code>Currency</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>Currency</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Currency</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>Currency</code>.
     * Currency is composed of a canonical Symbol and Decimals. This Decimals value is used to convert an Amount.Value from atomic units (Satoshis) to standard units (Bitcoins).
     * @alias module:model/Currency
     * @param symbol {String} Canonical symbol associated with a currency.
     * @param decimals {Number} Number of decimal places in the standard unit representation of the amount. For example, BTC has 8 decimals. Note that it is not possible to represent the value of some currency in atomic units that is not base 10.
     */
    constructor(symbol: string, decimals: number);
    symbol: any;
    decimals: any;
    metadata: any;
}
declare namespace Currency {
    const RequiredProperties: string[];
}
