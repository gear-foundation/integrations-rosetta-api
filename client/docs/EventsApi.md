# Rosetta.EventsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**eventsBlocks**](EventsApi.md#eventsBlocks) | **POST** /events/blocks | [INDEXER] Get a range of BlockEvents



## eventsBlocks

> EventsBlocksResponse eventsBlocks(eventsBlocksRequest)

[INDEXER] Get a range of BlockEvents

&#x60;/events/blocks&#x60; allows the caller to query a sequence of BlockEvents indicating which blocks were added and removed from storage to reach the current state. Following BlockEvents allows lightweight clients to update their state without needing to implement their own syncing logic (like finding the common parent in a reorg). &#x60;/events/blocks&#x60; is considered an \&quot;indexer\&quot; endpoint and Rosetta implementations are not required to complete it to adhere to the Rosetta spec. However, any Rosetta \&quot;indexer\&quot; MUST support this endpoint.

### Example

```javascript
import Rosetta from 'rosetta';

let apiInstance = new Rosetta.EventsApi();
let eventsBlocksRequest = new Rosetta.EventsBlocksRequest(); // EventsBlocksRequest | 
apiInstance.eventsBlocks(eventsBlocksRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventsBlocksRequest** | [**EventsBlocksRequest**](EventsBlocksRequest.md)|  | 

### Return type

[**EventsBlocksResponse**](EventsBlocksResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

