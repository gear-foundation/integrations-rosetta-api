import AccountIdentifier from './AccountIdentifier';
import Amount from './Amount';
import OperationIdentifier from './OperationIdentifier';

export default Operation;
/**
 * The Operation model module.
 * @module model/Operation
 * @version 1.4.13
 */
declare class Operation {
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj: any, operationIdentifier: any, type: any): void;
  /**
   * Constructs a <code>Operation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Operation} obj Optional instance to populate.
   * @return {module:model/Operation} The populated <code>Operation</code> instance.
   */
  static constructFromObject(data: any, obj?: any): any;
  /**
   * Validates the JSON data with respect to <code>Operation</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Operation</code>.
   */
  static validateJSON(data: any): boolean;
  /**
   * Constructs a new <code>Operation</code>.
   * Operations contain all balance-changing information within a transaction. They are always one-sided (only affect 1 AccountIdentifier) and can succeed or fail independently from a Transaction. Operations are used both to represent on-chain data (Data API) and to construct new transactions (Construction API), creating a standard interface for reading and writing to blockchains.
   * @alias module:model/Operation
   * @param operationIdentifier {module:model/OperationIdentifier}
   * @param type {String} Type is the network-specific type of the operation. Ensure that any type that can be returned here is also specified in the NetworkOptionsResponse. This can be very useful to downstream consumers that parse all block data.
   */
  constructor(operationIdentifier: any, type: string);
  operation_identifier: OperationIdentifier;
  related_operations: OperationIdentifier[];
  type: string;
  status: string;
  account: AccountIdentifier;
  amount: Amount;
  coin_change: any;
  metadata: any;
}
declare namespace Operation {
  const RequiredProperties: string[];
}
