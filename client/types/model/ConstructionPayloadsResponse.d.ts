export default ConstructionPayloadsResponse;
/**
 * The ConstructionPayloadsResponse model module.
 * @module model/ConstructionPayloadsResponse
 * @version 1.4.13
 */
declare class ConstructionPayloadsResponse {
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj: any, unsignedTransaction: any, payloads: any): void;
  /**
   * Constructs a <code>ConstructionPayloadsResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ConstructionPayloadsResponse} obj Optional instance to populate.
   * @return {module:model/ConstructionPayloadsResponse} The populated <code>ConstructionPayloadsResponse</code> instance.
   */
  static constructFromObject(data: any, obj?: any): any;
  /**
   * Validates the JSON data with respect to <code>ConstructionPayloadsResponse</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ConstructionPayloadsResponse</code>.
   */
  static validateJSON(data: any): boolean;
  /**
   * Constructs a new <code>ConstructionPayloadsResponse</code>.
   * ConstructionTransactionResponse is returned by &#x60;/construction/payloads&#x60;. It contains an unsigned transaction blob (that is usually needed to construct the a network transaction from a collection of signatures) and an array of payloads that must be signed by the caller.
   * @alias module:model/ConstructionPayloadsResponse
   * @param unsignedTransaction {String}
   * @param payloads {Array.<module:model/SigningPayload>}
   */
  constructor(unsignedTransaction: string, payloads: Array<any>);
  unsigned_transaction: any;
  payloads: any;
}
declare namespace ConstructionPayloadsResponse {
  const RequiredProperties: string[];
}
