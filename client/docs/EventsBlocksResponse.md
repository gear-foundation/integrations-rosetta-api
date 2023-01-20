# Rosetta.EventsBlocksResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**maxSequence** | **Number** | max_sequence is the maximum available sequence number to fetch. | 
**events** | [**[BlockEvent]**](BlockEvent.md) | events is an array of BlockEvents indicating the order to add and remove blocks to maintain a canonical view of blockchain state. Lightweight clients can use this event stream to update state without implementing their own block syncing logic. | 


