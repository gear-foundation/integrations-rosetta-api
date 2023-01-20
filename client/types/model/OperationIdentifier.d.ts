export default OperationIdentifier;
/**
 * The OperationIdentifier model module.
 * @module model/OperationIdentifier
 * @version 1.4.13
 */
declare class OperationIdentifier {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, index: any): void;
    /**
     * Constructs a <code>OperationIdentifier</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OperationIdentifier} obj Optional instance to populate.
     * @return {module:model/OperationIdentifier} The populated <code>OperationIdentifier</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>OperationIdentifier</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OperationIdentifier</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>OperationIdentifier</code>.
     * The operation_identifier uniquely identifies an operation within a transaction.
     * @alias module:model/OperationIdentifier
     * @param index {Number} The operation index is used to ensure each operation has a unique identifier within a transaction. This index is only relative to the transaction and NOT GLOBAL. The operations in each transaction should start from index 0. To clarify, there may not be any notion of an operation index in the blockchain being described.
     */
    constructor(index: number);
    index: any;
    network_index: any;
}
declare namespace OperationIdentifier {
    const RequiredProperties: string[];
}
