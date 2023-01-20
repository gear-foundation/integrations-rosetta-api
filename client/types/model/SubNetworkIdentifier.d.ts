export default SubNetworkIdentifier;
/**
 * The SubNetworkIdentifier model module.
 * @module model/SubNetworkIdentifier
 * @version 1.4.13
 */
declare class SubNetworkIdentifier {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, network: any): void;
    /**
     * Constructs a <code>SubNetworkIdentifier</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SubNetworkIdentifier} obj Optional instance to populate.
     * @return {module:model/SubNetworkIdentifier} The populated <code>SubNetworkIdentifier</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>SubNetworkIdentifier</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SubNetworkIdentifier</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>SubNetworkIdentifier</code>.
     * In blockchains with sharded state, the SubNetworkIdentifier is required to query some object on a specific shard. This identifier is optional for all non-sharded blockchains.
     * @alias module:model/SubNetworkIdentifier
     * @param network {String}
     */
    constructor(network: string);
    network: any;
    metadata: any;
}
declare namespace SubNetworkIdentifier {
    const RequiredProperties: string[];
}
