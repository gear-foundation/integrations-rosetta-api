import { getSpecTypes } from '@polkadot/types-known';
import { TypeRegistry } from '@polkadot/types';

import { GearNetworkIdentifier } from '../networks';
import { ChainProperties, getRegistryBase } from '@substrate/txwrapper-polkadot';
import { RegistryTypes } from '@polkadot/types/types';

export function getRegistry({
  specName,
  specVersion,
  metadataRpc,
  name,
  properties: { ss58Format, tokenDecimals, tokenSymbol },
  signedExtensions,
}: GearNetworkIdentifier): TypeRegistry {
  const registry = new TypeRegistry();

  // @ts-ignore
  return getRegistryBase({
    chainProperties: { ss58Format, tokenDecimals: [tokenDecimals], tokenSymbol: [tokenSymbol] },
    specTypes: getSpecTypes(registry, name, specName, specVersion) as any,
    userExtensions: signedExtensions,
    metadataRpc,
  });
}
