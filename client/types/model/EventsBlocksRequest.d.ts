export default EventsBlocksRequest;
/**
 * The EventsBlocksRequest model module.
 * @module model/EventsBlocksRequest
 * @version 1.4.13
 */
declare class EventsBlocksRequest {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, networkIdentifier: any): void;
    /**
     * Constructs a <code>EventsBlocksRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EventsBlocksRequest} obj Optional instance to populate.
     * @return {module:model/EventsBlocksRequest} The populated <code>EventsBlocksRequest</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>EventsBlocksRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EventsBlocksRequest</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>EventsBlocksRequest</code>.
     * EventsBlocksRequest is utilized to fetch a sequence of BlockEvents indicating which blocks were added and removed from storage to reach the current state.
     * @alias module:model/EventsBlocksRequest
     * @param networkIdentifier {module:model/NetworkIdentifier}
     */
    constructor(networkIdentifier: any);
    network_identifier: any;
    offset: any;
    limit: any;
}
declare namespace EventsBlocksRequest {
    const RequiredProperties: string[];
}
