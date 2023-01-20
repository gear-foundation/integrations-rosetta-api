/**
* Enum class Case.
* @enum {}
* @readonly
*/
export default class Case {
    /**
    * Returns a <code>Case</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/Case} The enum <code>Case</code> value.
    */
    static constructFromObject(object: any): any;
    /**
     * value: "upper_case"
     * @const
     */
    upper_case: string;
    /**
     * value: "lower_case"
     * @const
     */
    lower_case: string;
    /**
     * value: "case_sensitive"
     * @const
     */
    case_sensitive: string;
    /**
     * value: "null"
     * @const
     */
    null: string;
}
/**
 * *
 */
export type Case = any;
