/**
* Enum class ExemptionType.
* @enum {}
* @readonly
*/
export default class ExemptionType {
    /**
    * Returns a <code>ExemptionType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/ExemptionType} The enum <code>ExemptionType</code> value.
    */
    static constructFromObject(object: any): any;
    /**
     * value: "greater_or_equal"
     * @const
     */
    greater_or_equal: string;
    /**
     * value: "less_or_equal"
     * @const
     */
    less_or_equal: string;
    /**
     * value: "dynamic"
     * @const
     */
    dynamic: string;
}
/**
 * *
 */
export type ExemptionType = any;
