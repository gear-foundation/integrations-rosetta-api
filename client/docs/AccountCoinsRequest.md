# Rosetta.AccountCoinsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**networkIdentifier** | [**NetworkIdentifier**](NetworkIdentifier.md) |  | 
**accountIdentifier** | [**AccountIdentifier**](AccountIdentifier.md) |  | 
**includeMempool** | **Boolean** | Include state from the mempool when looking up an account&#39;s unspent coins. Note, using this functionality breaks any guarantee of idempotency. | 
**currencies** | [**[Currency]**](Currency.md) | In some cases, the caller may not want to retrieve coins for all currencies for an AccountIdentifier. If the currencies field is populated, only coins for the specified currencies will be returned. If not populated, all unspent coins will be returned. | [optional] 


