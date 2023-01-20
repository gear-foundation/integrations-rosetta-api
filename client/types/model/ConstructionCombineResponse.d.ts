export default ConstructionCombineResponse;
/**
 * The ConstructionCombineResponse model module.
 * @module model/ConstructionCombineResponse
 * @version 1.4.13
 */
declare class ConstructionCombineResponse {
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj: any, signedTransaction: any): void;
  /**
   * Constructs a <code>ConstructionCombineResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ConstructionCombineResponse} obj Optional instance to populate.
   * @return {module:model/ConstructionCombineResponse} The populated <code>ConstructionCombineResponse</code> instance.
   */
  static constructFromObject(data: any, obj?: any): any;
  /**
   * Validates the JSON data with respect to <code>ConstructionCombineResponse</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ConstructionCombineResponse</code>.
   */
  static validateJSON(data: any): boolean;
  /**
   * Constructs a new <code>ConstructionCombineResponse</code>.
   * ConstructionCombineResponse is returned by &#x60;/construction/combine&#x60;. The network payload will be sent directly to the &#x60;construction/submit&#x60; endpoint.
   * @alias module:model/ConstructionCombineResponse
   * @param signedTransaction {String}
   */
  constructor(signedTransaction: string);
  signed_transaction: string;
}
declare namespace ConstructionCombineResponse {
  const RequiredProperties: string[];
}
