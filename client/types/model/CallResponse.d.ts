export default CallResponse;
/**
 * The CallResponse model module.
 * @module model/CallResponse
 * @version 1.4.13
 */
declare class CallResponse {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, result: any, idempotent: any): void;
    /**
     * Constructs a <code>CallResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CallResponse} obj Optional instance to populate.
     * @return {module:model/CallResponse} The populated <code>CallResponse</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>CallResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CallResponse</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>CallResponse</code>.
     * CallResponse contains the result of a &#x60;/call&#x60; invocation.
     * @alias module:model/CallResponse
     * @param result {Object} Result contains the result of the `/call` invocation. This result will not be inspected or interpreted by Rosetta tooling and is left to the caller to decode.
     * @param idempotent {Boolean} Idempotent indicates that if `/call` is invoked with the same CallRequest again, at any point in time, it will return the same CallResponse. Integrators may cache the CallResponse if this is set to true to avoid making unnecessary calls to the Rosetta implementation. For this reason, implementers should be very conservative about returning true here or they could cause issues for the caller.
     */
    constructor(result: any, idempotent: boolean);
    result: any;
    idempotent: any;
}
declare namespace CallResponse {
    const RequiredProperties: string[];
}
