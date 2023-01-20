export default NetworkIdentifier;
/**
 * The NetworkIdentifier model module.
 * @module model/NetworkIdentifier
 * @version 1.4.13
 */
declare class NetworkIdentifier {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, blockchain: any, network: any): void;
    /**
     * Constructs a <code>NetworkIdentifier</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NetworkIdentifier} obj Optional instance to populate.
     * @return {module:model/NetworkIdentifier} The populated <code>NetworkIdentifier</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>NetworkIdentifier</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>NetworkIdentifier</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>NetworkIdentifier</code>.
     * The network_identifier specifies which network a particular object is associated with.
     * @alias module:model/NetworkIdentifier
     * @param blockchain {String}
     * @param network {String} If a blockchain has a specific chain-id or network identifier, it should go in this field. It is up to the client to determine which network-specific identifier is mainnet or testnet.
     */
    constructor(blockchain: string, network: string);
    blockchain: any;
    network: any;
    sub_network_identifier: any;
}
declare namespace NetworkIdentifier {
    const RequiredProperties: string[];
}
