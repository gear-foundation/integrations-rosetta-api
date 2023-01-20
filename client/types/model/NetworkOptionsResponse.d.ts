export default NetworkOptionsResponse;
/**
 * The NetworkOptionsResponse model module.
 * @module model/NetworkOptionsResponse
 * @version 1.4.13
 */
declare class NetworkOptionsResponse {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, version: any, allow: any): void;
    /**
     * Constructs a <code>NetworkOptionsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NetworkOptionsResponse} obj Optional instance to populate.
     * @return {module:model/NetworkOptionsResponse} The populated <code>NetworkOptionsResponse</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>NetworkOptionsResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>NetworkOptionsResponse</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>NetworkOptionsResponse</code>.
     * NetworkOptionsResponse contains information about the versioning of the node and the allowed operation statuses, operation types, and errors.
     * @alias module:model/NetworkOptionsResponse
     * @param version {module:model/Version}
     * @param allow {module:model/Allow}
     */
    constructor(version: any, allow: any);
    version: any;
    allow: any;
}
declare namespace NetworkOptionsResponse {
    const RequiredProperties: string[];
}
