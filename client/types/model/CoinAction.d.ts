/**
* Enum class CoinAction.
* @enum {}
* @readonly
*/
export default class CoinAction {
    /**
    * Returns a <code>CoinAction</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/CoinAction} The enum <code>CoinAction</code> value.
    */
    static constructFromObject(object: any): any;
    /**
     * value: "coin_created"
     * @const
     */
    created: string;
    /**
     * value: "coin_spent"
     * @const
     */
    spent: string;
}
/**
 * *
 */
export type CoinAction = any;
