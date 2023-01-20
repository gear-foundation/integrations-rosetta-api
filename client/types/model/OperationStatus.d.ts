export default OperationStatus;
/**
 * The OperationStatus model module.
 * @module model/OperationStatus
 * @version 1.4.13
 */
declare class OperationStatus {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, status: any, successful: any): void;
    /**
     * Constructs a <code>OperationStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OperationStatus} obj Optional instance to populate.
     * @return {module:model/OperationStatus} The populated <code>OperationStatus</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>OperationStatus</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OperationStatus</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>OperationStatus</code>.
     * OperationStatus is utilized to indicate which Operation status are considered successful.
     * @alias module:model/OperationStatus
     * @param status {String} The status is the network-specific status of the operation.
     * @param successful {Boolean} An Operation is considered successful if the Operation.Amount should affect the Operation.Account. Some blockchains (like Bitcoin) only include successful operations in blocks but other blockchains (like Ethereum) include unsuccessful operations that incur a fee. To reconcile the computed balance from the stream of Operations, it is critical to understand which Operation.Status indicate an Operation is successful and should affect an Account.
     */
    constructor(status: string, successful: boolean);
    status: any;
    successful: any;
}
declare namespace OperationStatus {
    const RequiredProperties: string[];
}
