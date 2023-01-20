# Rosetta.Transaction

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transactionIdentifier** | [**TransactionIdentifier**](TransactionIdentifier.md) |  | 
**operations** | [**[Operation]**](Operation.md) |  | 
**relatedTransactions** | [**[RelatedTransaction]**](RelatedTransaction.md) |  | [optional] 
**metadata** | **Object** | Transactions that are related to other transactions (like a cross-shard transaction) should include the tranaction_identifier of these transactions in the metadata. | [optional] 


