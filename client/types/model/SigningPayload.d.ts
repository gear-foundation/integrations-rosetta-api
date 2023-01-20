export default SigningPayload;
/**
 * The SigningPayload model module.
 * @module model/SigningPayload
 * @version 1.4.13
 */
declare class SigningPayload {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, hexBytes: any): void;
    /**
     * Constructs a <code>SigningPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SigningPayload} obj Optional instance to populate.
     * @return {module:model/SigningPayload} The populated <code>SigningPayload</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>SigningPayload</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SigningPayload</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>SigningPayload</code>.
     * SigningPayload is signed by the client with the keypair associated with an AccountIdentifier using the specified SignatureType. SignatureType can be optionally populated if there is a restriction on the signature scheme that can be used to sign the payload.
     * @alias module:model/SigningPayload
     * @param hexBytes {String} Hex-encoded string of the payload bytes.
     */
    constructor(hexBytes: string);
    address: any;
    account_identifier: any;
    hex_bytes: any;
    signature_type: any;
}
declare namespace SigningPayload {
    const RequiredProperties: string[];
}
