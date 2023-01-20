export default AccountIdentifier;
/**
 * The AccountIdentifier model module.
 * @module model/AccountIdentifier
 * @version 1.4.13
 */
declare class AccountIdentifier {
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj: any, address: any): void;
  /**
   * Constructs a <code>AccountIdentifier</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AccountIdentifier} obj Optional instance to populate.
   * @return {module:model/AccountIdentifier} The populated <code>AccountIdentifier</code> instance.
   */
  static constructFromObject(data: any, obj: any): any;
  /**
   * Validates the JSON data with respect to <code>AccountIdentifier</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AccountIdentifier</code>.
   */
  static validateJSON(data: any): boolean;
  /**
   * Constructs a new <code>AccountIdentifier</code>.
   * The account_identifier uniquely identifies an account within a network. All fields in the account_identifier are utilized to determine this uniqueness (including the metadata field, if populated).
   * @alias module:model/AccountIdentifier
   * @param address {String} The address may be a cryptographic public key (or some encoding of it) or a provided username.
   */
  constructor(address: string);
  address: string;
  sub_account: any;
  metadata: any;
}
declare namespace AccountIdentifier {
  const RequiredProperties: string[];
}
