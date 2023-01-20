export default MetadataRequest;
/**
 * The MetadataRequest model module.
 * @module model/MetadataRequest
 * @version 1.4.13
 */
declare class MetadataRequest {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>MetadataRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MetadataRequest} obj Optional instance to populate.
     * @return {module:model/MetadataRequest} The populated <code>MetadataRequest</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>MetadataRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>MetadataRequest</code>.
     */
    static validateJSON(data: any): boolean;
    metadata: any;
}
