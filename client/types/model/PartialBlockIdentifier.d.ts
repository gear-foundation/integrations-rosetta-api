export default PartialBlockIdentifier;
/**
 * The PartialBlockIdentifier model module.
 * @module model/PartialBlockIdentifier
 * @version 1.4.13
 */
declare class PartialBlockIdentifier {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>PartialBlockIdentifier</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PartialBlockIdentifier} obj Optional instance to populate.
     * @return {module:model/PartialBlockIdentifier} The populated <code>PartialBlockIdentifier</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>PartialBlockIdentifier</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PartialBlockIdentifier</code>.
     */
    static validateJSON(data: any): boolean;
    index: any;
    hash: any;
}
