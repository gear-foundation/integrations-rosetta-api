/**
* Account service.
* @module api/AccountApi
* @version 1.4.13
*/
export default class AccountApi {
    /**
    * Constructs a new AccountApi.
    * @alias module:api/AccountApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient?: any);
    apiClient: any;
    /**
     * Callback function to receive the result of the accountBalance operation.
     * @callback module:api/AccountApi~accountBalanceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AccountBalanceResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */
    /**
     * Get an Account's Balance
     * Get an array of all AccountBalances for an AccountIdentifier and the BlockIdentifier at which the balance lookup was performed. The BlockIdentifier must always be returned because some consumers of account balance data need to know specifically at which block the balance was calculated to compare balances they compute from operations with the balance returned by the node. It is important to note that making a balance request for an account without populating the SubAccountIdentifier should not result in the balance of all possible SubAccountIdentifiers being returned. Rather, it should result in the balance pertaining to no SubAccountIdentifiers being returned (sometimes called the liquid balance). To get all balances associated with an account, it may be necessary to perform multiple balance requests with unique AccountIdentifiers. It is also possible to perform a historical balance lookup (if the server supports it) by passing in an optional BlockIdentifier.
     * @param {module:model/AccountBalanceRequest} accountBalanceRequest
     * @param {module:api/AccountApi~accountBalanceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AccountBalanceResponse}
     */
    accountBalance(accountBalanceRequest: any, callback: any): any;
    /**
     * Callback function to receive the result of the accountCoins operation.
     * @callback module:api/AccountApi~accountCoinsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AccountCoinsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */
    /**
     * Get an Account's Unspent Coins
     * Get an array of all unspent coins for an AccountIdentifier and the BlockIdentifier at which the lookup was performed. If your implementation does not support coins (i.e. it is for an account-based blockchain), you do not need to implement this endpoint. If you implementation does support coins (i.e. it is fro a UTXO-based blockchain), you MUST also complete the `/account/balance` endpoint. It is important to note that making a coins request for an account without populating the SubAccountIdentifier should not result in the coins of all possible SubAccountIdentifiers being returned. Rather, it should result in the coins pertaining to no SubAccountIdentifiers being returned. To get all coins associated with an account, it may be necessary to perform multiple coin requests with unique AccountIdentifiers. Optionally, an implementation may choose to support updating an AccountIdentifier's unspent coins based on the contents of the mempool. Note, using this functionality breaks any guarantee of idempotency.
     * @param {module:model/AccountCoinsRequest} accountCoinsRequest
     * @param {module:api/AccountApi~accountCoinsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AccountCoinsResponse}
     */
    accountCoins(accountCoinsRequest: any, callback: any): any;
}
