/**
* Enum class SignatureType.
* @enum {}
* @readonly
*/
export default class SignatureType {
    /**
    * Returns a <code>SignatureType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/SignatureType} The enum <code>SignatureType</code> value.
    */
    static constructFromObject(object: any): any;
    /**
     * value: "ecdsa"
     * @const
     */
    ecdsa: string;
    /**
     * value: "ecdsa_recovery"
     * @const
     */
    ecdsa_recovery: string;
    /**
     * value: "ed25519"
     * @const
     */
    ed25519: string;
    /**
     * value: "schnorr_1"
     * @const
     */
    schnorr_1: string;
    /**
     * value: "schnorr_bip340"
     * @const
     */
    schnorr_bip340: string;
    /**
     * value: "schnorr_poseidon"
     * @const
     */
    schnorr_poseidon: string;
}
/**
 * *
 */
export type SignatureType = any;
