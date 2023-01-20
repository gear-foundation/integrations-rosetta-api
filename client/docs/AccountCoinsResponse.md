# Rosetta.AccountCoinsResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blockIdentifier** | [**BlockIdentifier**](BlockIdentifier.md) |  | 
**coins** | [**[Coin]**](Coin.md) | If a blockchain is UTXO-based, all unspent Coins owned by an account_identifier should be returned alongside the balance. It is highly recommended to populate this field so that users of the Rosetta API implementation don&#39;t need to maintain their own indexer to track their UTXOs. | 
**metadata** | **Object** | Account-based blockchains that utilize a nonce or sequence number should include that number in the metadata. This number could be unique to the identifier or global across the account address. | [optional] 


