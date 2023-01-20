export default CoinIdentifier;
/**
 * The CoinIdentifier model module.
 * @module model/CoinIdentifier
 * @version 1.4.13
 */
declare class CoinIdentifier {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, identifier: any): void;
    /**
     * Constructs a <code>CoinIdentifier</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CoinIdentifier} obj Optional instance to populate.
     * @return {module:model/CoinIdentifier} The populated <code>CoinIdentifier</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>CoinIdentifier</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CoinIdentifier</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>CoinIdentifier</code>.
     * CoinIdentifier uniquely identifies a Coin.
     * @alias module:model/CoinIdentifier
     * @param identifier {String} Identifier should be populated with a globally unique identifier of a Coin. In Bitcoin, this identifier would be transaction_hash:index.
     */
    constructor(identifier: string);
    identifier: any;
}
declare namespace CoinIdentifier {
    const RequiredProperties: string[];
}
