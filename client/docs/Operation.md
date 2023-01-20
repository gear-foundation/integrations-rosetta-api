# Rosetta.Operation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operationIdentifier** | [**OperationIdentifier**](OperationIdentifier.md) |  | 
**relatedOperations** | [**[OperationIdentifier]**](OperationIdentifier.md) | Restrict referenced related_operations to identifier indices &lt; the current operation_identifier.index. This ensures there exists a clear DAG-structure of relations. Since operations are one-sided, one could imagine relating operations in a single transfer or linking operations in a call tree. | [optional] 
**type** | **String** | Type is the network-specific type of the operation. Ensure that any type that can be returned here is also specified in the NetworkOptionsResponse. This can be very useful to downstream consumers that parse all block data. | 
**status** | **String** | Status is the network-specific status of the operation. Status is not defined on the transaction object because blockchains with smart contracts may have transactions that partially apply (some operations are successful and some are not). Blockchains with atomic transactions (all operations succeed or all operations fail) will have the same status for each operation. On-chain operations (operations retrieved in the &#x60;/block&#x60; and &#x60;/block/transaction&#x60; endpoints) MUST have a populated status field (anything on-chain must have succeeded or failed). However, operations provided during transaction construction (often times called \&quot;intent\&quot; in the documentation) MUST NOT have a populated status field (operations yet to be included on-chain have not yet succeeded or failed). | [optional] 
**account** | [**AccountIdentifier**](AccountIdentifier.md) |  | [optional] 
**amount** | [**Amount**](Amount.md) |  | [optional] 
**coinChange** | [**CoinChange**](CoinChange.md) |  | [optional] 
**metadata** | **Object** |  | [optional] 


