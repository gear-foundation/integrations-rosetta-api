export default TransactionIdentifierResponse;
/**
 * The TransactionIdentifierResponse model module.
 * @module model/TransactionIdentifierResponse
 * @version 1.4.13
 */
declare class TransactionIdentifierResponse {
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj: any, transactionIdentifier: any): void;
  /**
   * Constructs a <code>TransactionIdentifierResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TransactionIdentifierResponse} obj Optional instance to populate.
   * @return {module:model/TransactionIdentifierResponse} The populated <code>TransactionIdentifierResponse</code> instance.
   */
  static constructFromObject(data: any, obj?: any): any;
  /**
   * Validates the JSON data with respect to <code>TransactionIdentifierResponse</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TransactionIdentifierResponse</code>.
   */
  static validateJSON(data: any): boolean;
  /**
   * Constructs a new <code>TransactionIdentifierResponse</code>.
   * TransactionIdentifierResponse contains the transaction_identifier of a transaction that was submitted to either &#x60;/construction/hash&#x60; or &#x60;/construction/submit&#x60;.
   * @alias module:model/TransactionIdentifierResponse
   * @param transactionIdentifier {module:model/TransactionIdentifier}
   */
  constructor(transactionIdentifier: any);
  transaction_identifier: any;
  metadata: any;
}
declare namespace TransactionIdentifierResponse {
  const RequiredProperties: string[];
}
