export default Version;
/**
 * The Version model module.
 * @module model/Version
 * @version 1.4.13
 */
declare class Version {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, rosettaVersion: any, nodeVersion: any): void;
    /**
     * Constructs a <code>Version</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Version} obj Optional instance to populate.
     * @return {module:model/Version} The populated <code>Version</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>Version</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Version</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>Version</code>.
     * The Version object is utilized to inform the client of the versions of different components of the Rosetta implementation.
     * @alias module:model/Version
     * @param rosettaVersion {String} The rosetta_version is the version of the Rosetta interface the implementation adheres to. This can be useful for clients looking to reliably parse responses.
     * @param nodeVersion {String} The node_version is the canonical version of the node runtime. This can help clients manage deployments.
     */
    constructor(rosettaVersion: string, nodeVersion: string);
    rosetta_version: any;
    node_version: any;
    middleware_version: any;
    metadata: any;
}
declare namespace Version {
    const RequiredProperties: string[];
}
