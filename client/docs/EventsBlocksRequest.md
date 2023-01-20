# Rosetta.EventsBlocksRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**networkIdentifier** | [**NetworkIdentifier**](NetworkIdentifier.md) |  | 
**offset** | **Number** | offset is the offset into the event stream to sync events from. If this field is not populated, we return the limit events backwards from tip. If this is set to 0, we start from the beginning. | [optional] 
**limit** | **Number** | limit is the maximum number of events to fetch in one call. The implementation may return &lt;&#x3D; limit events. | [optional] 


