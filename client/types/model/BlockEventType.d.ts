/**
* Enum class BlockEventType.
* @enum {}
* @readonly
*/
export default class BlockEventType {
    /**
    * Returns a <code>BlockEventType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/BlockEventType} The enum <code>BlockEventType</code> value.
    */
    static constructFromObject(object: any): any;
    /**
     * value: "block_added"
     * @const
     */
    added: string;
    /**
     * value: "block_removed"
     * @const
     */
    removed: string;
}
/**
 * *
 */
export type BlockEventType = any;
