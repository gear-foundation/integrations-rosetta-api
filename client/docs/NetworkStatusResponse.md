# Rosetta.NetworkStatusResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currentBlockIdentifier** | [**BlockIdentifier**](BlockIdentifier.md) |  | 
**currentBlockTimestamp** | **Number** | The timestamp of the block in milliseconds since the Unix Epoch. The timestamp is stored in milliseconds because some blockchains produce blocks more often than once a second. | 
**genesisBlockIdentifier** | [**BlockIdentifier**](BlockIdentifier.md) |  | 
**oldestBlockIdentifier** | [**BlockIdentifier**](BlockIdentifier.md) |  | [optional] 
**syncStatus** | [**SyncStatus**](SyncStatus.md) |  | [optional] 
**peers** | [**[Peer]**](Peer.md) |  | [optional] 


