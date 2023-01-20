# Rosetta.SearchApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**searchTransactions**](SearchApi.md#searchTransactions) | **POST** /search/transactions | [INDEXER] Search for Transactions



## searchTransactions

> SearchTransactionsResponse searchTransactions(searchTransactionsRequest)

[INDEXER] Search for Transactions

&#x60;/search/transactions&#x60; allows the caller to search for transactions that meet certain conditions. Some conditions include matching a transaction hash, containing an operation with a certain status, or containing an operation that affects a certain account. &#x60;/search/transactions&#x60; is considered an \&quot;indexer\&quot; endpoint and Rosetta implementations are not required to complete it to adhere to the Rosetta spec. However, any Rosetta \&quot;indexer\&quot; MUST support this endpoint.

### Example

```javascript
import Rosetta from 'rosetta';

let apiInstance = new Rosetta.SearchApi();
let searchTransactionsRequest = new Rosetta.SearchTransactionsRequest(); // SearchTransactionsRequest | 
apiInstance.searchTransactions(searchTransactionsRequest, (error, data, response) => {
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
 **searchTransactionsRequest** | [**SearchTransactionsRequest**](SearchTransactionsRequest.md)|  | 

### Return type

[**SearchTransactionsResponse**](SearchTransactionsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

