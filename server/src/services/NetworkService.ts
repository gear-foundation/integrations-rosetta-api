import {
  NetworkListResponse,
  BlockIdentifier,
  NetworkStatusResponse,
  NetworkIdentifier,
  Error,
  Allow,
  NetworkOptionsResponse,
  Version,
} from 'rosetta-client';

import { operationStatuses, OpType } from '../types';
import { errors, getNetworkIdent } from '../helpers';
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
  const allow = new Allow(
    operationStatuses,
    Object.values(OpType),
    Object.values(errors).map((e) => new Error(e.code, e.message, e.retriable)),
    true,
  );
  const { api } = getNetworkIdent(network_identifier);
  const nodeVersion = await api.getNodeVersion();
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
  const { api } = getNetworkIdent(network_identifier);

  const [currentBlockIndentifier, ts] = await api.getBlockIdent(null);

  const genesisBlockIdentifier = new BlockIdentifier(0, api.genesis);

  return new NetworkStatusResponse(currentBlockIndentifier, ts, genesisBlockIdentifier);
};

export default {
  networkList,
  networkOptions,
  networkStatus,
};
