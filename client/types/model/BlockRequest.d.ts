import BlockIdentifier from './BlockIdentifier';

export default BlockRequest;
/**
 * The BlockRequest model module.
 * @module model/BlockRequest
 * @version 1.4.13
 */
declare class BlockRequest {
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj: any, networkIdentifier: any, blockIdentifier: any): void;
  /**
   * Constructs a <code>BlockRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BlockRequest} obj Optional instance to populate.
   * @return {module:model/BlockRequest} The populated <code>BlockRequest</code> instance.
   */
  static constructFromObject(data: any, obj: any): any;
  /**
   * Validates the JSON data with respect to <code>BlockRequest</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BlockRequest</code>.
   */
  static validateJSON(data: any): boolean;
  /**
   * Constructs a new <code>BlockRequest</code>.
   * A BlockRequest is utilized to make a block request on the /block endpoint.
   * @alias module:model/BlockRequest
   * @param networkIdentifier {module:model/NetworkIdentifier}
   * @param blockIdentifier {module:model/PartialBlockIdentifier}
   */
  constructor(networkIdentifier: any, blockIdentifier: any);
  network_identifier: any;
  block_identifier: BlockIdentifier;
}
declare namespace BlockRequest {
  const RequiredProperties: string[];
}
