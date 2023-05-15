import { getSpecTypes } from '@polkadot/types-known';
import { TypeRegistry } from '@polkadot/types';

import { GearNetworkIdentifier } from '../networks';
import { getRegistryBase } from '@substrate/txwrapper-polkadot';
import { RegistryTypes } from '@polkadot/types/types';

export function getRegistry({
  specName,
  specVersion,
  metadataRpc,
  name,
  properties,
  signedExtensions,
}: GearNetworkIdentifier): TypeRegistry {
  const registry = new TypeRegistry();

  return getRegistryBase({
    chainProperties: properties,
    specTypes: getSpecTypes(registry, name, specName, specVersion) as RegistryTypes,
    userExtensions: signedExtensions,
    metadataRpc,
  });
}
