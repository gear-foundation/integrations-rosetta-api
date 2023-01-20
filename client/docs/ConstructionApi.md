# Rosetta.ConstructionApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**constructionCombine**](ConstructionApi.md#constructionCombine) | **POST** /construction/combine | Create Network Transaction from Signatures
[**constructionDerive**](ConstructionApi.md#constructionDerive) | **POST** /construction/derive | Derive an AccountIdentifier from a PublicKey
[**constructionHash**](ConstructionApi.md#constructionHash) | **POST** /construction/hash | Get the Hash of a Signed Transaction
[**constructionMetadata**](ConstructionApi.md#constructionMetadata) | **POST** /construction/metadata | Get Metadata for Transaction Construction
[**constructionParse**](ConstructionApi.md#constructionParse) | **POST** /construction/parse | Parse a Transaction
[**constructionPayloads**](ConstructionApi.md#constructionPayloads) | **POST** /construction/payloads | Generate an Unsigned Transaction and Signing Payloads
[**constructionPreprocess**](ConstructionApi.md#constructionPreprocess) | **POST** /construction/preprocess | Create a Request to Fetch Metadata
[**constructionSubmit**](ConstructionApi.md#constructionSubmit) | **POST** /construction/submit | Submit a Signed Transaction



## constructionCombine

> ConstructionCombineResponse constructionCombine(constructionCombineRequest)

Create Network Transaction from Signatures

Combine creates a network-specific transaction from an unsigned transaction and an array of provided signatures. The signed transaction returned from this method will be sent to the &#x60;/construction/submit&#x60; endpoint by the caller.

### Example

```javascript
import Rosetta from 'rosetta';

let apiInstance = new Rosetta.ConstructionApi();
let constructionCombineRequest = new Rosetta.ConstructionCombineRequest(); // ConstructionCombineRequest | 
apiInstance.constructionCombine(constructionCombineRequest, (error, data, response) => {
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
 **constructionCombineRequest** | [**ConstructionCombineRequest**](ConstructionCombineRequest.md)|  | 

### Return type

[**ConstructionCombineResponse**](ConstructionCombineResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## constructionDerive

> ConstructionDeriveResponse constructionDerive(constructionDeriveRequest)

Derive an AccountIdentifier from a PublicKey

Derive returns the AccountIdentifier associated with a public key. Blockchains that require an on-chain action to create an account should not implement this method.

### Example

```javascript
import Rosetta from 'rosetta';

let apiInstance = new Rosetta.ConstructionApi();
let constructionDeriveRequest = new Rosetta.ConstructionDeriveRequest(); // ConstructionDeriveRequest | 
apiInstance.constructionDerive(constructionDeriveRequest, (error, data, response) => {
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
 **constructionDeriveRequest** | [**ConstructionDeriveRequest**](ConstructionDeriveRequest.md)|  | 

### Return type

[**ConstructionDeriveResponse**](ConstructionDeriveResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## constructionHash

> TransactionIdentifierResponse constructionHash(constructionHashRequest)

Get the Hash of a Signed Transaction

TransactionHash returns the network-specific transaction hash for a signed transaction.

### Example

```javascript
import Rosetta from 'rosetta';

let apiInstance = new Rosetta.ConstructionApi();
let constructionHashRequest = new Rosetta.ConstructionHashRequest(); // ConstructionHashRequest | 
apiInstance.constructionHash(constructionHashRequest, (error, data, response) => {
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
 **constructionHashRequest** | [**ConstructionHashRequest**](ConstructionHashRequest.md)|  | 

### Return type

[**TransactionIdentifierResponse**](TransactionIdentifierResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## constructionMetadata

> ConstructionMetadataResponse constructionMetadata(constructionMetadataRequest)

Get Metadata for Transaction Construction

Get any information required to construct a transaction for a specific network. Metadata returned here could be a recent hash to use, an account sequence number, or even arbitrary chain state. The request used when calling this endpoint is created by calling &#x60;/construction/preprocess&#x60; in an offline environment. You should NEVER assume that the request sent to this endpoint will be created by the caller or populated with any custom parameters. This must occur in &#x60;/construction/preprocess&#x60;. It is important to clarify that this endpoint should not pre-construct any transactions for the client (this should happen in &#x60;/construction/payloads&#x60;). This endpoint is left purposely unstructured because of the wide scope of metadata that could be required.

### Example

```javascript
import Rosetta from 'rosetta';

let apiInstance = new Rosetta.ConstructionApi();
let constructionMetadataRequest = new Rosetta.ConstructionMetadataRequest(); // ConstructionMetadataRequest | 
apiInstance.constructionMetadata(constructionMetadataRequest, (error, data, response) => {
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
 **constructionMetadataRequest** | [**ConstructionMetadataRequest**](ConstructionMetadataRequest.md)|  | 

### Return type

[**ConstructionMetadataResponse**](ConstructionMetadataResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## constructionParse

> ConstructionParseResponse constructionParse(constructionParseRequest)

Parse a Transaction

Parse is called on both unsigned and signed transactions to understand the intent of the formulated transaction. This is run as a sanity check before signing (after &#x60;/construction/payloads&#x60;) and before broadcast (after &#x60;/construction/combine&#x60;). 

### Example

```javascript
import Rosetta from 'rosetta';

let apiInstance = new Rosetta.ConstructionApi();
let constructionParseRequest = new Rosetta.ConstructionParseRequest(); // ConstructionParseRequest | 
apiInstance.constructionParse(constructionParseRequest, (error, data, response) => {
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
 **constructionParseRequest** | [**ConstructionParseRequest**](ConstructionParseRequest.md)|  | 

### Return type

[**ConstructionParseResponse**](ConstructionParseResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## constructionPayloads

> ConstructionPayloadsResponse constructionPayloads(constructionPayloadsRequest)

Generate an Unsigned Transaction and Signing Payloads

Payloads is called with an array of operations and the response from &#x60;/construction/metadata&#x60;. It returns an unsigned transaction blob and a collection of payloads that must be signed by particular AccountIdentifiers using a certain SignatureType. The array of operations provided in transaction construction often times can not specify all \&quot;effects\&quot; of a transaction (consider invoked transactions in Ethereum). However, they can deterministically specify the \&quot;intent\&quot; of the transaction, which is sufficient for construction. For this reason, parsing the corresponding transaction in the Data API (when it lands on chain) will contain a superset of whatever operations were provided during construction.

### Example

```javascript
import Rosetta from 'rosetta';

let apiInstance = new Rosetta.ConstructionApi();
let constructionPayloadsRequest = new Rosetta.ConstructionPayloadsRequest(); // ConstructionPayloadsRequest | 
apiInstance.constructionPayloads(constructionPayloadsRequest, (error, data, response) => {
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
 **constructionPayloadsRequest** | [**ConstructionPayloadsRequest**](ConstructionPayloadsRequest.md)|  | 

### Return type

[**ConstructionPayloadsResponse**](ConstructionPayloadsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## constructionPreprocess

> ConstructionPreprocessResponse constructionPreprocess(constructionPreprocessRequest)

Create a Request to Fetch Metadata

Preprocess is called prior to &#x60;/construction/payloads&#x60; to construct a request for any metadata that is needed for transaction construction given (i.e. account nonce). The &#x60;options&#x60; object returned from this endpoint will be sent to the &#x60;/construction/metadata&#x60; endpoint UNMODIFIED by the caller (in an offline execution environment). If your Construction API implementation has configuration options, they MUST be specified in the &#x60;/construction/preprocess&#x60; request (in the &#x60;metadata&#x60; field).

### Example

```javascript
import Rosetta from 'rosetta';

let apiInstance = new Rosetta.ConstructionApi();
let constructionPreprocessRequest = new Rosetta.ConstructionPreprocessRequest(); // ConstructionPreprocessRequest | 
apiInstance.constructionPreprocess(constructionPreprocessRequest, (error, data, response) => {
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
 **constructionPreprocessRequest** | [**ConstructionPreprocessRequest**](ConstructionPreprocessRequest.md)|  | 

### Return type

[**ConstructionPreprocessResponse**](ConstructionPreprocessResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## constructionSubmit

> TransactionIdentifierResponse constructionSubmit(constructionSubmitRequest)

Submit a Signed Transaction

Submit a pre-signed transaction to the node. This call should not block on the transaction being included in a block. Rather, it should return immediately with an indication of whether or not the transaction was included in the mempool. The transaction submission response should only return a 200 status if the submitted transaction could be included in the mempool. Otherwise, it should return an error.

### Example

```javascript
import Rosetta from 'rosetta';

let apiInstance = new Rosetta.ConstructionApi();
let constructionSubmitRequest = new Rosetta.ConstructionSubmitRequest(); // ConstructionSubmitRequest | 
apiInstance.constructionSubmit(constructionSubmitRequest, (error, data, response) => {
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
 **constructionSubmitRequest** | [**ConstructionSubmitRequest**](ConstructionSubmitRequest.md)|  | 

### Return type

[**TransactionIdentifierResponse**](TransactionIdentifierResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

