# Rosetta.SearchTransactionsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**networkIdentifier** | [**NetworkIdentifier**](NetworkIdentifier.md) |  | 
**operator** | [**Operator**](Operator.md) |  | [optional] 
**maxBlock** | **Number** | max_block is the largest block index to consider when searching for transactions. If this field is not populated, the current block is considered the max_block. If you do not specify a max_block, it is possible a newly synced block will interfere with paginated transaction queries (as the offset could become invalid with newly added rows). | [optional] 
**offset** | **Number** | offset is the offset into the query result to start returning transactions. If any search conditions are changed, the query offset will change and you must restart your search iteration. | [optional] 
**limit** | **Number** | limit is the maximum number of transactions to return in one call. The implementation may return &lt;&#x3D; limit transactions. | [optional] 
**transactionIdentifier** | [**TransactionIdentifier**](TransactionIdentifier.md) |  | [optional] 
**accountIdentifier** | [**AccountIdentifier**](AccountIdentifier.md) |  | [optional] 
**coinIdentifier** | [**CoinIdentifier**](CoinIdentifier.md) |  | [optional] 
**currency** | [**Currency**](Currency.md) |  | [optional] 
**status** | **String** | status is the network-specific operation type. | [optional] 
**type** | **String** | type is the network-specific operation type. | [optional] 
**address** | **String** | address is AccountIdentifier.Address. This is used to get all transactions related to an AccountIdentifier.Address, regardless of SubAccountIdentifier. | [optional] 
**success** | **Boolean** | success is a synthetic condition populated by parsing network-specific operation statuses (using the mapping provided in &#x60;/network/options&#x60;). | [optional] 


