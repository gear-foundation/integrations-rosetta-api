export default Block;
/**
 * The Block model module.
 * @module model/Block
 * @version 1.4.13
 */
declare class Block {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, blockIdentifier: any, parentBlockIdentifier: any, timestamp: any, transactions: any): void;
    /**
     * Constructs a <code>Block</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Block} obj Optional instance to populate.
     * @return {module:model/Block} The populated <code>Block</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>Block</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Block</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>Block</code>.
     * Blocks contain an array of Transactions that occurred at a particular BlockIdentifier. A hard requirement for blocks returned by Rosetta implementations is that they MUST be _inalterable_: once a client has requested and received a block identified by a specific BlockIndentifier, all future calls for that same BlockIdentifier must return the same block contents.
     * @alias module:model/Block
     * @param blockIdentifier {module:model/BlockIdentifier}
     * @param parentBlockIdentifier {module:model/BlockIdentifier}
     * @param timestamp {Number} The timestamp of the block in milliseconds since the Unix Epoch. The timestamp is stored in milliseconds because some blockchains produce blocks more often than once a second.
     * @param transactions {Array.<module:model/Transaction>}
     */
    constructor(blockIdentifier: any, parentBlockIdentifier: any, timestamp: number, transactions: Array<NodeModule>);
    block_identifier: any;
    parent_block_identifier: any;
    timestamp: any;
    transactions: any;
    metadata: any;
}
declare namespace Block {
    const RequiredProperties: string[];
}
