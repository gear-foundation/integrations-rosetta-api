export default SyncStatus;
/**
 * The SyncStatus model module.
 * @module model/SyncStatus
 * @version 1.4.13
 */
declare class SyncStatus {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>SyncStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SyncStatus} obj Optional instance to populate.
     * @return {module:model/SyncStatus} The populated <code>SyncStatus</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>SyncStatus</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SyncStatus</code>.
     */
    static validateJSON(data: any): boolean;
    current_index: any;
    target_index: any;
    stage: any;
    synced: any;
}
