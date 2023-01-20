export default Peer;
/**
 * The Peer model module.
 * @module model/Peer
 * @version 1.4.13
 */
declare class Peer {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, peerId: any): void;
    /**
     * Constructs a <code>Peer</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Peer} obj Optional instance to populate.
     * @return {module:model/Peer} The populated <code>Peer</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>Peer</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Peer</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>Peer</code>.
     * A Peer is a representation of a node&#39;s peer.
     * @alias module:model/Peer
     * @param peerId {String}
     */
    constructor(peerId: string);
    peer_id: any;
    metadata: any;
}
declare namespace Peer {
    const RequiredProperties: string[];
}
