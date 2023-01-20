import NetworkIdentifier from './NetworkIdentifier';
import Operation from './Operation';

export default ConstructionPayloadsRequest;
/**
 * The ConstructionPayloadsRequest model module.
 * @module model/ConstructionPayloadsRequest
 * @version 1.4.13
 */
declare class ConstructionPayloadsRequest {
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj: any, networkIdentifier: any, operations: any): void;
  /**
   * Constructs a <code>ConstructionPayloadsRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ConstructionPayloadsRequest} obj Optional instance to populate.
   * @return {module:model/ConstructionPayloadsRequest} The populated <code>ConstructionPayloadsRequest</code> instance.
   */
  static constructFromObject(data: any, obj: any): any;
  /**
   * Validates the JSON data with respect to <code>ConstructionPayloadsRequest</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ConstructionPayloadsRequest</code>.
   */
  static validateJSON(data: any): boolean;
  /**
   * Constructs a new <code>ConstructionPayloadsRequest</code>.
   * ConstructionPayloadsRequest is the request to &#x60;/construction/payloads&#x60;. It contains the network, a slice of operations, and arbitrary metadata that was returned by the call to &#x60;/construction/metadata&#x60;. Optionally, the request can also include an array of PublicKeys associated with the AccountIdentifiers returned in ConstructionPreprocessResponse.
   * @alias module:model/ConstructionPayloadsRequest
   * @param networkIdentifier {module:model/NetworkIdentifier}
   * @param operations {Array.<module:model/Operation>}
   */
  constructor(networkIdentifier: any, operations: Array<NodeModule>);
  network_identifier: NetworkIdentifier;
  operations: Operation[];
  metadata: any;
  public_keys: any;
}
declare namespace ConstructionPayloadsRequest {
  const RequiredProperties: string[];
}
