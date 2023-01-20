export default BalanceExemption;
/**
 * The BalanceExemption model module.
 * @module model/BalanceExemption
 * @version 1.4.13
 */
declare class BalanceExemption {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>BalanceExemption</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BalanceExemption} obj Optional instance to populate.
     * @return {module:model/BalanceExemption} The populated <code>BalanceExemption</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>BalanceExemption</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BalanceExemption</code>.
     */
    static validateJSON(data: any): boolean;
    sub_account_address: any;
    currency: any;
    exemption_type: any;
}
