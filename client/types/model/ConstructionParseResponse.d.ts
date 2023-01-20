export default ConstructionParseResponse;
/**
 * The ConstructionParseResponse model module.
 * @module model/ConstructionParseResponse
 * @version 1.4.13
 */
declare class ConstructionParseResponse {
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj: any, operations: any): void;
  /**
   * Constructs a <code>ConstructionParseResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ConstructionParseResponse} obj Optional instance to populate.
   * @return {module:model/ConstructionParseResponse} The populated <code>ConstructionParseResponse</code> instance.
   */
  static constructFromObject(data: any, obj?: any): any;
  /**
   * Validates the JSON data with respect to <code>ConstructionParseResponse</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ConstructionParseResponse</code>.
   */
  static validateJSON(data: any): boolean;
  /**
   * Constructs a new <code>ConstructionParseResponse</code>.
   * ConstructionParseResponse contains an array of operations that occur in a transaction blob. This should match the array of operations provided to &#x60;/construction/preprocess&#x60; and &#x60;/construction/payloads&#x60;.
   * @alias module:model/ConstructionParseResponse
   * @param operations {Array.<module:model/Operation>}
   */
  constructor(operations: Array<NodeModule>);
  operations: any;
  signers: any;
  account_identifier_signers: any;
  metadata: any;
}
declare namespace ConstructionParseResponse {
  const RequiredProperties: string[];
}
