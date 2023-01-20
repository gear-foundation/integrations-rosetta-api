import { NetworkIdentifier } from 'rosetta-client';

import networks, { GearNetworkIdentifier } from '../networks';
import { ApiError, throwError } from './errors';

export function getNetworkIdent({ blockchain, network }: NetworkIdentifier): GearNetworkIdentifier {
  const networkIdent = networks.find(
    (n) => n.blockchain.toLowerCase() === blockchain.toLowerCase() && n.network.toLowerCase() === network.toLowerCase(),
  );

  if (!networkIdent) {
    throwError(ApiError.NETWORK_NOT_SUPPORTED);
  }

  return networkIdent;
}
