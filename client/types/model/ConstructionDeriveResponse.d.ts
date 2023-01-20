export default ConstructionDeriveResponse;
/**
 * The ConstructionDeriveResponse model module.
 * @module model/ConstructionDeriveResponse
 * @version 1.4.13
 */
declare class ConstructionDeriveResponse {
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj: any): void;
  /**
   * Constructs a <code>ConstructionDeriveResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ConstructionDeriveResponse} obj Optional instance to populate.
   * @return {module:model/ConstructionDeriveResponse} The populated <code>ConstructionDeriveResponse</code> instance.
   */
  static constructFromObject(data: any, obj?: any): any;
  /**
   * Validates the JSON data with respect to <code>ConstructionDeriveResponse</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ConstructionDeriveResponse</code>.
   */
  static validateJSON(data: any): boolean;
  address: any;
  account_identifier: any;
  metadata: any;
}
