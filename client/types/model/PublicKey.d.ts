export default PublicKey;
/**
 * The PublicKey model module.
 * @module model/PublicKey
 * @version 1.4.13
 */
declare class PublicKey {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, hexBytes: any, curveType: any): void;
    /**
     * Constructs a <code>PublicKey</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PublicKey} obj Optional instance to populate.
     * @return {module:model/PublicKey} The populated <code>PublicKey</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>PublicKey</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PublicKey</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>PublicKey</code>.
     * PublicKey contains a public key byte array for a particular CurveType encoded in hex. Note that there is no PrivateKey struct as this is NEVER the concern of an implementation.
     * @alias module:model/PublicKey
     * @param hexBytes {String} Hex-encoded public key bytes in the format specified by the CurveType.
     * @param curveType {module:model/CurveType}
     */
    constructor(hexBytes: string, curveType: any);
    hex_bytes: any;
    curve_type: any;
}
declare namespace PublicKey {
    const RequiredProperties: string[];
}
