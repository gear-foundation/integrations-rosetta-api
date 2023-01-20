# Rosetta.Allow

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operationStatuses** | [**[OperationStatus]**](OperationStatus.md) | All Operation.Status this implementation supports. Any status that is returned during parsing that is not listed here will cause client validation to error. | 
**operationTypes** | **[String]** | All Operation.Type this implementation supports. Any type that is returned during parsing that is not listed here will cause client validation to error. | 
**errors** | [**[Error]**](Error.md) | All Errors that this implementation could return. Any error that is returned during parsing that is not listed here will cause client validation to error. | 
**historicalBalanceLookup** | **Boolean** | Any Rosetta implementation that supports querying the balance of an account at any height in the past should set this to true. | 
**timestampStartIndex** | **Number** | If populated, &#x60;timestamp_start_index&#x60; indicates the first block index where block timestamps are considered valid (i.e. all blocks less than &#x60;timestamp_start_index&#x60; could have invalid timestamps). This is useful when the genesis block (or blocks) of a network have timestamp 0. If not populated, block timestamps are assumed to be valid for all available blocks. | [optional] 
**callMethods** | **[String]** | All methods that are supported by the /call endpoint. Communicating which parameters should be provided to /call is the responsibility of the implementer (this is en lieu of defining an entire type system and requiring the implementer to define that in Allow). | 
**balanceExemptions** | [**[BalanceExemption]**](BalanceExemption.md) | BalanceExemptions is an array of BalanceExemption indicating which account balances could change without a corresponding Operation. BalanceExemptions should be used sparingly as they may introduce significant complexity for integrators that attempt to reconcile all account balance changes. If your implementation relies on any BalanceExemptions, you MUST implement historical balance lookup (the ability to query an account balance at any BlockIdentifier). | 
**mempoolCoins** | **Boolean** | Any Rosetta implementation that can update an AccountIdentifier&#39;s unspent coins based on the contents of the mempool should populate this field as true. If false, requests to &#x60;/account/coins&#x60; that set &#x60;include_mempool&#x60; as true will be automatically rejected. | 
**blockHashCase** | [**Case**](Case.md) |  | [optional] 
**transactionHashCase** | [**Case**](Case.md) |  | [optional] 


