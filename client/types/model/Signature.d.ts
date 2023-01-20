import PublicKey from './PublicKey';

export default Signature;
/**
 * The Signature model module.
 * @module model/Signature
 * @version 1.4.13
 */
declare class Signature {
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj: any, signingPayload: any, publicKey: any, signatureType: any, hexBytes: any): void;
  /**
   * Constructs a <code>Signature</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Signature} obj Optional instance to populate.
   * @return {module:model/Signature} The populated <code>Signature</code> instance.
   */
  static constructFromObject(data: any, obj: any): any;
  /**
   * Validates the JSON data with respect to <code>Signature</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Signature</code>.
   */
  static validateJSON(data: any): boolean;
  /**
   * Constructs a new <code>Signature</code>.
   * Signature contains the payload that was signed, the public keys of the keypairs used to produce the signature, the signature (encoded in hex), and the SignatureType. PublicKey is often times not known during construction of the signing payloads but may be needed to combine signatures properly.
   * @alias module:model/Signature
   * @param signingPayload {module:model/SigningPayload}
   * @param publicKey {module:model/PublicKey}
   * @param signatureType {module:model/SignatureType}
   * @param hexBytes {String}
   */
  constructor(signingPayload: any, publicKey: any, signatureType: any, hexBytes: string);
  signing_payload: string;
  public_key: PublicKey;
  signature_type: string;
  hex_bytes: string;
}
declare namespace Signature {
  const RequiredProperties: string[];
}
