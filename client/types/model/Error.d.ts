export default Error;
/**
 * The Error model module.
 * @module model/Error
 * @version 1.4.13
 */
declare class Error {
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj: any, code: any, message: any, retriable: any): void;
  /**
   * Constructs a <code>Error</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Error} obj Optional instance to populate.
   * @return {module:model/Error} The populated <code>Error</code> instance.
   */
  static constructFromObject(data: any, obj?: any): any;
  /**
   * Validates the JSON data with respect to <code>Error</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Error</code>.
   */
  static validateJSON(data: any): boolean;
  /**
   * Constructs a new <code>Error</code>.
   * Instead of utilizing HTTP status codes to describe node errors (which often do not have a good analog), rich errors are returned using this object. Both the code and message fields can be individually used to correctly identify an error. Implementations MUST use unique values for both fields.
   * @alias module:model/Error
   * @param code {Number} Code is a network-specific error code. If desired, this code can be equivalent to an HTTP status code.
   * @param message {String} Message is a network-specific error message. The message MUST NOT change for a given code. In particular, this means that any contextual information should be included in the details field.
   * @param retriable {Boolean} An error is retriable if the same request may succeed if submitted again.
   */
  constructor(code: number, message: string, retriable: boolean);
  code: any;
  message: any;
  description: any;
  retriable: any;
  details: any;
}
declare namespace Error {
  const RequiredProperties: string[];
}
