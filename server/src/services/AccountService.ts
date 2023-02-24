import { ApiError, getNetworkIdent, throwError } from '../helpers';
import { AccountBalanceResponse, Amount } from 'rosetta-client';
import config from '../config';

/**
 * Get an Account's Balance
 * Get an array of all AccountBalances for an AccountIdentifier and the BlockIdentifier at which the balance lookup was performed. The BlockIdentifier must always be returned because some consumers of account balance data need to know specifically at which block the balance was calculated to compare balances they compute from operations with the balance returned by the node. It is important to note that making a balance request for an account without populating the SubAccountIdentifier should not result in the balance of all possible SubAccountIdentifiers being returned. Rather, it should result in the balance pertaining to no SubAccountIdentifiers being returned (sometimes called the liquid balance). To get all balances associated with an account, it may be necessary to perform multiple balance requests with unique AccountIdentifiers. It is also possible to perform a historical balance lookup (if the server supports it) by passing in an optional BlockIdentifier.
 *
 * accountBalanceRequest AccountBalanceRequest
 * returns AccountBalanceResponse
 * */
const accountBalance = async ({ body: { account_identifier, network_identifier, block_identifier } }) => {
  if (config.MODE.isOffline) {
    throwError(ApiError.NOT_AVAILABLE_OFFLINE);
  }
  const { api, currency } = getNetworkIdent(network_identifier);
  const [blockIdent] = await api.getBlockIdent(
    block_identifier ? (block_identifier.hash ? block_identifier.hash : block_identifier.index) : undefined,
  );

  const balance = await api.getBalanceAtBlock(account_identifier.address, blockIdent.hash);

  return new AccountBalanceResponse(blockIdent, [new Amount(balance, currency)]);
};

const accountCoins = () => throwError(ApiError.NOT_SUPPORTED);

export default {
  accountBalance,
  accountCoins,
};
