export default EventsBlocksResponse;
/**
 * The EventsBlocksResponse model module.
 * @module model/EventsBlocksResponse
 * @version 1.4.13
 */
declare class EventsBlocksResponse {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, maxSequence: any, events: any): void;
    /**
     * Constructs a <code>EventsBlocksResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EventsBlocksResponse} obj Optional instance to populate.
     * @return {module:model/EventsBlocksResponse} The populated <code>EventsBlocksResponse</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>EventsBlocksResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EventsBlocksResponse</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>EventsBlocksResponse</code>.
     * EventsBlocksResponse contains an ordered collection of BlockEvents and the max retrievable sequence.
     * @alias module:model/EventsBlocksResponse
     * @param maxSequence {Number} max_sequence is the maximum available sequence number to fetch.
     * @param events {Array.<module:model/BlockEvent>} events is an array of BlockEvents indicating the order to add and remove blocks to maintain a canonical view of blockchain state. Lightweight clients can use this event stream to update state without implementing their own block syncing logic.
     */
    constructor(maxSequence: number, events: Array<NodeModule>);
    max_sequence: any;
    events: any;
}
declare namespace EventsBlocksResponse {
    const RequiredProperties: string[];
}
