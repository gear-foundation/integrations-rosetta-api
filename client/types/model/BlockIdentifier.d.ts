export default BlockIdentifier;
/**
 * The BlockIdentifier model module.
 * @module model/BlockIdentifier
 * @version 1.4.13
 */
declare class BlockIdentifier {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, index: any, hash: any): void;
    /**
     * Constructs a <code>BlockIdentifier</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BlockIdentifier} obj Optional instance to populate.
     * @return {module:model/BlockIdentifier} The populated <code>BlockIdentifier</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>BlockIdentifier</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BlockIdentifier</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>BlockIdentifier</code>.
     * The block_identifier uniquely identifies a block in a particular network.
     * @alias module:model/BlockIdentifier
     * @param index {Number} This is also known as the block height.
     * @param hash {String} This should be normalized according to the case specified in the block_hash_case network options.
     */
    constructor(index: number, hash: string);
    index: any;
    hash: any;
}
declare namespace BlockIdentifier {
    const RequiredProperties: string[];
}
