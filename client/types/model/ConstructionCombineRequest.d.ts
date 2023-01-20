import Signature from './Signature';

export default ConstructionCombineRequest;
/**
 * The ConstructionCombineRequest model module.
 * @module model/ConstructionCombineRequest
 * @version 1.4.13
 */
declare class ConstructionCombineRequest {
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj: any, networkIdentifier: any, unsignedTransaction: any, signatures: any): void;
  /**
   * Constructs a <code>ConstructionCombineRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ConstructionCombineRequest} obj Optional instance to populate.
   * @return {module:model/ConstructionCombineRequest} The populated <code>ConstructionCombineRequest</code> instance.
   */
  static constructFromObject(data: any, obj: any): any;
  /**
   * Validates the JSON data with respect to <code>ConstructionCombineRequest</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ConstructionCombineRequest</code>.
   */
  static validateJSON(data: any): boolean;
  /**
   * Constructs a new <code>ConstructionCombineRequest</code>.
   * ConstructionCombineRequest is the input to the &#x60;/construction/combine&#x60; endpoint. It contains the unsigned transaction blob returned by &#x60;/construction/payloads&#x60; and all required signatures to create a network transaction.
   * @alias module:model/ConstructionCombineRequest
   * @param networkIdentifier {module:model/NetworkIdentifier}
   * @param unsignedTransaction {String}
   * @param signatures {Array.<module:model/Signature>}
   */
  constructor(networkIdentifier: any, unsignedTransaction: string, signatures: Array<NodeModule>);
  network_identifier: any;
  unsigned_transaction: any;
  signatures: Signature[];
}
declare namespace ConstructionCombineRequest {
  const RequiredProperties: string[];
}
