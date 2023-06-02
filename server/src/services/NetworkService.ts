import {
  NetworkListResponse,
  BlockIdentifier,
  NetworkStatusResponse,
  NetworkIdentifier,
  Allow,
  NetworkOptionsResponse,
  Version,
} from 'rosetta-client';

import { operationStatuses, opTypes } from '../types';
import { allErrors, ApiError, getNetworkIdent, throwError } from '../helpers';
import networks from '../networks';
import config from '../config';

/**
 * Get List of Available Networks
 * This endpoint returns a list of NetworkIdentifiers that the Rosetta server supports.
 *
 * metadataRequest MetadataRequest
 * returns NetworkListResponse
 * */
const networkList = async () =>
  new NetworkListResponse(networks.map(({ blockchain, network }) => ({ blockchain, network })));

/**
 * Get Network Options
 * This endpoint returns the version information and allowed network-specific types for a NetworkIdentifier. Any NetworkIdentifier returned by /network/list should be accessible here. Because options are retrievable in the context of a NetworkIdentifier, it is possible to define unique options for each network.
 *
 * networkRequest NetworkRequest
 * returns NetworkOptionsResponse
 * */
const networkOptions = async ({
  body: { network_identifier },
}: {
  body: { network_identifier: NetworkIdentifier };
}) => {
  const allow = new Allow(operationStatuses, opTypes, allErrors, true);
  const { nodeVersion } = getNetworkIdent(network_identifier);
  return new NetworkOptionsResponse(new Version(config.ROSETTA_VERSION, nodeVersion), allow);
};

/**
 * Get Network Status
 * This endpoint returns the current status of the network requested. Any NetworkIdentifier returned by /network/list should be accessible here.
 *
 * networkRequest NetworkRequest
 * returns NetworkStatusResponse
 * */
const networkStatus = async ({ body: { network_identifier } }: { body: { network_identifier: NetworkIdentifier } }) => {
  if (config.MODE.isOffline) {
    throwError(ApiError.NOT_AVAILABLE_OFFLINE);
  }
  const { api } = getNetworkIdent(network_identifier);

  const [current_block_identifier, current_block_timestamp] = await api.getBlockIdent(null);

  const genesis_block_identifier = new BlockIdentifier(0, api.genesis);

  const [sync_status, peers] = await Promise.all([api.syncState(), api.peers()]);

  return NetworkStatusResponse.constructFromObject(
    { current_block_identifier, current_block_timestamp, genesis_block_identifier, sync_status, peers },
    {},
  );
};

export default {
  networkList,
  networkOptions,
  networkStatus,
};
