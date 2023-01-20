export default Amount;
/**
 * The Amount model module.
 * @module model/Amount
 * @version 1.4.13
 */
declare class Amount {
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj: any, value: any, currency: any): void;
  /**
   * Constructs a <code>Amount</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Amount} obj Optional instance to populate.
   * @return {module:model/Amount} The populated <code>Amount</code> instance.
   */
  static constructFromObject(data: any, obj: any): any;
  /**
   * Validates the JSON data with respect to <code>Amount</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Amount</code>.
   */
  static validateJSON(data: any): boolean;
  /**
   * Constructs a new <code>Amount</code>.
   * Amount is some Value of a Currency. It is considered invalid to specify a Value without a Currency.
   * @alias module:model/Amount
   * @param value {String} Value of the transaction in atomic units represented as an arbitrary-sized signed integer. For example, 1 BTC would be represented by a value of 100000000.
   * @param currency {module:model/Currency}
   */
  constructor(value: string, currency?: any);
  value: string;
  currency: string;
  metadata: any;
}
declare namespace Amount {
  const RequiredProperties: string[];
}
