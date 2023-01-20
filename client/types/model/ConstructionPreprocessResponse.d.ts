export default ConstructionPreprocessResponse;
/**
 * The ConstructionPreprocessResponse model module.
 * @module model/ConstructionPreprocessResponse
 * @version 1.4.13
 */
declare class ConstructionPreprocessResponse {
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj: any): void;
  /**
   * Constructs a <code>ConstructionPreprocessResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ConstructionPreprocessResponse} obj Optional instance to populate.
   * @return {module:model/ConstructionPreprocessResponse} The populated <code>ConstructionPreprocessResponse</code> instance.
   */
  static constructFromObject(data: any, obj?: any): any;
  /**
   * Validates the JSON data with respect to <code>ConstructionPreprocessResponse</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ConstructionPreprocessResponse</code>.
   */
  static validateJSON(data: any): boolean;
  options: any;
  required_public_keys: any;
}
