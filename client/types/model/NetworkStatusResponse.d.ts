export default NetworkStatusResponse;
/**
 * The NetworkStatusResponse model module.
 * @module model/NetworkStatusResponse
 * @version 1.4.13
 */
declare class NetworkStatusResponse {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, currentBlockIdentifier: any, currentBlockTimestamp: any, genesisBlockIdentifier: any): void;
    /**
     * Constructs a <code>NetworkStatusResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NetworkStatusResponse} obj Optional instance to populate.
     * @return {module:model/NetworkStatusResponse} The populated <code>NetworkStatusResponse</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>NetworkStatusResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>NetworkStatusResponse</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>NetworkStatusResponse</code>.
     * NetworkStatusResponse contains basic information about the node&#39;s view of a blockchain network. It is assumed that any BlockIdentifier.Index less than or equal to CurrentBlockIdentifier.Index can be queried. If a Rosetta implementation prunes historical state, it should populate the optional &#x60;oldest_block_identifier&#x60; field with the oldest block available to query. If this is not populated, it is assumed that the &#x60;genesis_block_identifier&#x60; is the oldest queryable block. If a Rosetta implementation performs some pre-sync before it is possible to query blocks, sync_status should be populated so that clients can still monitor healthiness. Without this field, it may appear that the implementation is stuck syncing and needs to be terminated.
     * @alias module:model/NetworkStatusResponse
     * @param currentBlockIdentifier {module:model/BlockIdentifier}
     * @param currentBlockTimestamp {Number} The timestamp of the block in milliseconds since the Unix Epoch. The timestamp is stored in milliseconds because some blockchains produce blocks more often than once a second.
     * @param genesisBlockIdentifier {module:model/BlockIdentifier}
     */
    constructor(currentBlockIdentifier: any, currentBlockTimestamp: number, genesisBlockIdentifier: any);
    current_block_identifier: any;
    current_block_timestamp: any;
    genesis_block_identifier: any;
    oldest_block_identifier: any;
    sync_status: any;
    peers: any;
}
declare namespace NetworkStatusResponse {
    const RequiredProperties: string[];
}
