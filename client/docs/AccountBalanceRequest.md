# Rosetta.AccountBalanceRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**networkIdentifier** | [**NetworkIdentifier**](NetworkIdentifier.md) |  | 
**accountIdentifier** | [**AccountIdentifier**](AccountIdentifier.md) |  | 
**blockIdentifier** | [**PartialBlockIdentifier**](PartialBlockIdentifier.md) |  | [optional] 
**currencies** | [**[Currency]**](Currency.md) | In some cases, the caller may not want to retrieve all available balances for an AccountIdentifier. If the currencies field is populated, only balances for the specified currencies will be returned. If not populated, all available balances will be returned. | [optional] 


