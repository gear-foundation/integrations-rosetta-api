export default SubAccountIdentifier;
/**
 * The SubAccountIdentifier model module.
 * @module model/SubAccountIdentifier
 * @version 1.4.13
 */
declare class SubAccountIdentifier {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, address: any): void;
    /**
     * Constructs a <code>SubAccountIdentifier</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SubAccountIdentifier} obj Optional instance to populate.
     * @return {module:model/SubAccountIdentifier} The populated <code>SubAccountIdentifier</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>SubAccountIdentifier</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SubAccountIdentifier</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>SubAccountIdentifier</code>.
     * An account may have state specific to a contract address (ERC-20 token) and/or a stake (delegated balance). The sub_account_identifier should specify which state (if applicable) an account instantiation refers to.
     * @alias module:model/SubAccountIdentifier
     * @param address {String} The SubAccount address may be a cryptographic value or some other identifier (ex: bonded) that uniquely specifies a SubAccount.
     */
    constructor(address: string);
    address: any;
    metadata: any;
}
declare namespace SubAccountIdentifier {
    const RequiredProperties: string[];
}
