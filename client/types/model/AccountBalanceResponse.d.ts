import Amount from './Amount';

export default AccountBalanceResponse;
/**
 * The AccountBalanceResponse model module.
 * @module model/AccountBalanceResponse
 * @version 1.4.13
 */
declare class AccountBalanceResponse {
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj: any, blockIdentifier: any, balances: any): void;
  /**
   * Constructs a <code>AccountBalanceResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AccountBalanceResponse} obj Optional instance to populate.
   * @return {module:model/AccountBalanceResponse} The populated <code>AccountBalanceResponse</code> instance.
   */
  static constructFromObject(data: any, obj: any): any;
  /**
   * Validates the JSON data with respect to <code>AccountBalanceResponse</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AccountBalanceResponse</code>.
   */
  static validateJSON(data: any): boolean;
  /**
   * Constructs a new <code>AccountBalanceResponse</code>.
   * An AccountBalanceResponse is returned on the /account/balance endpoint. If an account has a balance for each AccountIdentifier describing it (ex: an ERC-20 token balance on a few smart contracts), an account balance request must be made with each AccountIdentifier. The &#x60;coins&#x60; field was removed and replaced by by &#x60;/account/coins&#x60; in &#x60;v1.4.7&#x60;.
   * @alias module:model/AccountBalanceResponse
   * @param blockIdentifier {module:model/BlockIdentifier}
   * @param balances {Array.<module:model/Amount>} A single account may have a balance in multiple currencies.
   */
  constructor(blockIdentifier: any, balances: Array<Amount>);
  block_identifier: any;
  balances: any;
  metadata: any;
}
declare namespace AccountBalanceResponse {
  const RequiredProperties: string[];
}
