import NetworkIdentifier from './NetworkIdentifier';
import Operation from './Operation';

export default ConstructionPreprocessRequest;
/**
 * The ConstructionPreprocessRequest model module.
 * @module model/ConstructionPreprocessRequest
 * @version 1.4.13
 */
declare class ConstructionPreprocessRequest {
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj: any, networkIdentifier: any, operations: any): void;
  /**
   * Constructs a <code>ConstructionPreprocessRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ConstructionPreprocessRequest} obj Optional instance to populate.
   * @return {module:model/ConstructionPreprocessRequest} The populated <code>ConstructionPreprocessRequest</code> instance.
   */
  static constructFromObject(data: any, obj: any): any;
  /**
   * Validates the JSON data with respect to <code>ConstructionPreprocessRequest</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ConstructionPreprocessRequest</code>.
   */
  static validateJSON(data: any): boolean;
  /**
   * Constructs a new <code>ConstructionPreprocessRequest</code>.
   * ConstructionPreprocessRequest is passed to the &#x60;/construction/preprocess&#x60; endpoint so that a Rosetta implementation can determine which metadata it needs to request for construction. Metadata provided in this object should NEVER be a product of live data (i.e. the caller must follow some network-specific data fetching strategy outside of the Construction API to populate required Metadata). If live data is required for construction, it MUST be fetched in the call to &#x60;/construction/metadata&#x60;.
   * @alias module:model/ConstructionPreprocessRequest
   * @param networkIdentifier {module:model/NetworkIdentifier}
   * @param operations {Array.<module:model/Operation>}
   */
  constructor(networkIdentifier: any, operations: Array<NodeModule>);
  network_identifier: NetworkIdentifier;
  operations: Operation[];
  metadata: any;
}
declare namespace ConstructionPreprocessRequest {
  const RequiredProperties: string[];
}
