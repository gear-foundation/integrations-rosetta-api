/* eslint-disable no-unused-vars */

import { ApiError, throwError } from '../helpers';

/**
 * Make a Network-Specific Procedure Call
 * Call invokes an arbitrary, network-specific procedure call with network-specific parameters. The guidance for what this endpoint should or could do is purposely left vague. In Ethereum, this could be used to invoke `eth_call` to implement an entire Rosetta API interface for some smart contract that is not parsed by the implementation creator (like a DEX). This endpoint could also be used to provide access to data that does not map to any Rosetta models instead of requiring an integrator to use some network-specific SDK and call some network-specific endpoint (like surfacing staking parameters). Call is NOT a replacement for implementing Rosetta API endpoints or mapping network-specific data to Rosetta models. Rather, it enables developers to build additional Rosetta API interfaces for things they care about without introducing complexity into a base-level Rosetta implementation. Simply put, imagine that the average integrator will use layered Rosetta API implementations that each surfaces unique data.
 *
 * callRequest CallRequest
 * returns CallResponse
 * */
const call = ({ callRequest }) => {
  throwError(ApiError.NOT_IMPLEMENTED);
};

export default {
  call,
};
