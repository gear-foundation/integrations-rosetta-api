/**
* Enum class Operator.
* @enum {}
* @readonly
*/
export default class Operator {
    /**
    * Returns a <code>Operator</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/Operator} The enum <code>Operator</code> value.
    */
    static constructFromObject(object: any): any;
    /**
     * value: "or"
     * @const
     */
    or: string;
    /**
     * value: "and"
     * @const
     */
    and: string;
}
/**
 * *
 */
export type Operator = any;
