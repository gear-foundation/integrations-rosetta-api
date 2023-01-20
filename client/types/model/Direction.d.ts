/**
* Enum class Direction.
* @enum {}
* @readonly
*/
export default class Direction {
    /**
    * Returns a <code>Direction</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/Direction} The enum <code>Direction</code> value.
    */
    static constructFromObject(object: any): any;
    /**
     * value: "forward"
     * @const
     */
    forward: string;
    /**
     * value: "backward"
     * @const
     */
    backward: string;
}
/**
 * *
 */
export type Direction = any;
