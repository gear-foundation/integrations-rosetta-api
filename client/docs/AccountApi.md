# Rosetta.AccountApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**accountBalance**](AccountApi.md#accountBalance) | **POST** /account/balance | Get an Account&#39;s Balance
[**accountCoins**](AccountApi.md#accountCoins) | **POST** /account/coins | Get an Account&#39;s Unspent Coins



## accountBalance

> AccountBalanceResponse accountBalance(accountBalanceRequest)

Get an Account&#39;s Balance

Get an array of all AccountBalances for an AccountIdentifier and the BlockIdentifier at which the balance lookup was performed. The BlockIdentifier must always be returned because some consumers of account balance data need to know specifically at which block the balance was calculated to compare balances they compute from operations with the balance returned by the node. It is important to note that making a balance request for an account without populating the SubAccountIdentifier should not result in the balance of all possible SubAccountIdentifiers being returned. Rather, it should result in the balance pertaining to no SubAccountIdentifiers being returned (sometimes called the liquid balance). To get all balances associated with an account, it may be necessary to perform multiple balance requests with unique AccountIdentifiers. It is also possible to perform a historical balance lookup (if the server supports it) by passing in an optional BlockIdentifier.

### Example

```javascript
import Rosetta from 'rosetta';

let apiInstance = new Rosetta.AccountApi();
let accountBalanceRequest = new Rosetta.AccountBalanceRequest(); // AccountBalanceRequest | 
apiInstance.accountBalance(accountBalanceRequest, (error, data, response) => {
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
 **accountBalanceRequest** | [**AccountBalanceRequest**](AccountBalanceRequest.md)|  | 

### Return type

[**AccountBalanceResponse**](AccountBalanceResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## accountCoins

> AccountCoinsResponse accountCoins(accountCoinsRequest)

Get an Account&#39;s Unspent Coins

Get an array of all unspent coins for an AccountIdentifier and the BlockIdentifier at which the lookup was performed. If your implementation does not support coins (i.e. it is for an account-based blockchain), you do not need to implement this endpoint. If you implementation does support coins (i.e. it is fro a UTXO-based blockchain), you MUST also complete the &#x60;/account/balance&#x60; endpoint. It is important to note that making a coins request for an account without populating the SubAccountIdentifier should not result in the coins of all possible SubAccountIdentifiers being returned. Rather, it should result in the coins pertaining to no SubAccountIdentifiers being returned. To get all coins associated with an account, it may be necessary to perform multiple coin requests with unique AccountIdentifiers. Optionally, an implementation may choose to support updating an AccountIdentifier&#39;s unspent coins based on the contents of the mempool. Note, using this functionality breaks any guarantee of idempotency.

### Example

```javascript
import Rosetta from 'rosetta';

let apiInstance = new Rosetta.AccountApi();
let accountCoinsRequest = new Rosetta.AccountCoinsRequest(); // AccountCoinsRequest | 
apiInstance.accountCoins(accountCoinsRequest, (error, data, response) => {
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
 **accountCoinsRequest** | [**AccountCoinsRequest**](AccountCoinsRequest.md)|  | 

### Return type

[**AccountCoinsResponse**](AccountCoinsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

