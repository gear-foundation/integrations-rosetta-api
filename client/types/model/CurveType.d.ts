/**
* Enum class CurveType.
* @enum {}
* @readonly
*/
export default class CurveType {
    /**
    * Returns a <code>CurveType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/CurveType} The enum <code>CurveType</code> value.
    */
    static constructFromObject(object: any): any;
    /**
     * value: "secp256k1"
     * @const
     */
    secp256k1: string;
    /**
     * value: "secp256k1_bip340"
     * @const
     */
    secp256k1_bip340: string;
    /**
     * value: "secp256r1"
     * @const
     */
    secp256r1: string;
    /**
     * value: "edwards25519"
     * @const
     */
    edwards25519: string;
    /**
     * value: "tweedle"
     * @const
     */
    tweedle: string;
    /**
     * value: "pallas"
     * @const
     */
    pallas: string;
}
/**
 * *
 */
export type CurveType = any;
