import BalanceExemption from './BalanceExemption';
import Error from './Error';
import OperationStatus from './OperationStatus';

export default Allow;
/**
 * The Allow model module.
 * @module model/Allow
 * @version 1.4.13
 */
declare class Allow {
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(
    obj: any,
    operationStatuses: any,
    operationTypes: any,
    errors: any,
    historicalBalanceLookup: any,
    callMethods: any,
    balanceExemptions: any,
    mempoolCoins: any,
  ): void;
  /**
   * Constructs a <code>Allow</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Allow} obj Optional instance to populate.
   * @return {module:model/Allow} The populated <code>Allow</code> instance.
   */
  static constructFromObject(data: any, obj: any): any;
  /**
   * Validates the JSON data with respect to <code>Allow</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Allow</code>.
   */
  static validateJSON(data: any): boolean;
  /**
   * Constructs a new <code>Allow</code>.
   * Allow specifies supported Operation status, Operation types, and all possible error statuses. This Allow object is used by clients to validate the correctness of a Rosetta Server implementation. It is expected that these clients will error if they receive some response that contains any of the above information that is not specified here.
   * @alias module:model/Allow
   * @param operationStatuses {Array.<module:model/OperationStatus>} All Operation.Status this implementation supports. Any status that is returned during parsing that is not listed here will cause client validation to error.
   * @param operationTypes {Array.<String>} All Operation.Type this implementation supports. Any type that is returned during parsing that is not listed here will cause client validation to error.
   * @param errors {Array.<module:model/Error>} All Errors that this implementation could return. Any error that is returned during parsing that is not listed here will cause client validation to error.
   * @param historicalBalanceLookup {Boolean} Any Rosetta implementation that supports querying the balance of an account at any height in the past should set this to true.
   * @param callMethods {Array.<String>} All methods that are supported by the /call endpoint. Communicating which parameters should be provided to /call is the responsibility of the implementer (this is en lieu of defining an entire type system and requiring the implementer to define that in Allow).
   * @param balanceExemptions {Array.<module:model/BalanceExemption>} BalanceExemptions is an array of BalanceExemption indicating which account balances could change without a corresponding Operation. BalanceExemptions should be used sparingly as they may introduce significant complexity for integrators that attempt to reconcile all account balance changes. If your implementation relies on any BalanceExemptions, you MUST implement historical balance lookup (the ability to query an account balance at any BlockIdentifier).
   * @param mempoolCoins {Boolean} Any Rosetta implementation that can update an AccountIdentifier's unspent coins based on the contents of the mempool should populate this field as true. If false, requests to `/account/coins` that set `include_mempool` as true will be automatically rejected.
   */
  constructor(
    operationStatuses: Array<OperationStatus>,
    operationTypes: Array<string>,
    errors: Array<Error>,
    historicalBalanceLookup: boolean,
    callMethods?: Array<string>,
    balanceExemptions?: Array<BalanceExemption>,
    mempoolCoins?: boolean,
  );
  operation_statuses: any;
  operation_types: any;
  errors: any;
  historical_balance_lookup: any;
  timestamp_start_index: any;
  call_methods: any;
  balance_exemptions: any;
  mempool_coins: any;
  block_hash_case: any;
  transaction_hash_case: any;
}
declare namespace Allow {
  const RequiredProperties: string[];
}
