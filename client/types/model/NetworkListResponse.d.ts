export default NetworkListResponse;
/**
 * The NetworkListResponse model module.
 * @module model/NetworkListResponse
 * @version 1.4.13
 */
declare class NetworkListResponse {
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj: any, networkIdentifiers: any): void;
  /**
   * Constructs a <code>NetworkListResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NetworkListResponse} obj Optional instance to populate.
   * @return {module:model/NetworkListResponse} The populated <code>NetworkListResponse</code> instance.
   */
  static constructFromObject(data: any, obj?: any): any;
  /**
   * Validates the JSON data with respect to <code>NetworkListResponse</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>NetworkListResponse</code>.
   */
  static validateJSON(data: any): boolean;
  /**
   * Constructs a new <code>NetworkListResponse</code>.
   * A NetworkListResponse contains all NetworkIdentifiers that the node can serve information for.
   * @alias module:model/NetworkListResponse
   * @param networkIdentifiers {Array.<module:model/NetworkIdentifier>}
   */
  constructor(networkIdentifiers: Array<any>);
  network_identifiers: any;
}
declare namespace NetworkListResponse {
  const RequiredProperties: string[];
}
