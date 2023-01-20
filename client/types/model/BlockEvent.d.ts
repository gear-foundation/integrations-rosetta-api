export default BlockEvent;
/**
 * The BlockEvent model module.
 * @module model/BlockEvent
 * @version 1.4.13
 */
declare class BlockEvent {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, sequence: any, blockIdentifier: any, type: any): void;
    /**
     * Constructs a <code>BlockEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BlockEvent} obj Optional instance to populate.
     * @return {module:model/BlockEvent} The populated <code>BlockEvent</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>BlockEvent</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BlockEvent</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>BlockEvent</code>.
     * BlockEvent represents the addition or removal of a BlockIdentifier from storage. Streaming BlockEvents allows lightweight clients to update their own state without needing to implement their own syncing logic.
     * @alias module:model/BlockEvent
     * @param sequence {Number} sequence is the unique identifier of a BlockEvent within the context of a NetworkIdentifier.
     * @param blockIdentifier {module:model/BlockIdentifier}
     * @param type {module:model/BlockEventType}
     */
    constructor(sequence: number, blockIdentifier: any, type: any);
    sequence: any;
    block_identifier: any;
    type: any;
}
declare namespace BlockEvent {
    const RequiredProperties: string[];
}
