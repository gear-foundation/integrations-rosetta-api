export default ConstructionMetadataRequest;
/**
 * The ConstructionMetadataRequest model module.
 * @module model/ConstructionMetadataRequest
 * @version 1.4.13
 */
declare class ConstructionMetadataRequest {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, networkIdentifier: any): void;
    /**
     * Constructs a <code>ConstructionMetadataRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ConstructionMetadataRequest} obj Optional instance to populate.
     * @return {module:model/ConstructionMetadataRequest} The populated <code>ConstructionMetadataRequest</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>ConstructionMetadataRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ConstructionMetadataRequest</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>ConstructionMetadataRequest</code>.
     * A ConstructionMetadataRequest is utilized to get information required to construct a transaction. The Options object used to specify which metadata to return is left purposely unstructured to allow flexibility for implementers. Options is not required in the case that there is network-wide metadata of interest. Optionally, the request can also include an array of PublicKeys associated with the AccountIdentifiers returned in ConstructionPreprocessResponse.
     * @alias module:model/ConstructionMetadataRequest
     * @param networkIdentifier {module:model/NetworkIdentifier}
     */
    constructor(networkIdentifier: any);
    network_identifier: any;
    options: any;
    public_keys: any;
}
declare namespace ConstructionMetadataRequest {
    const RequiredProperties: string[];
}
