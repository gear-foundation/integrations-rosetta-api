import { TypeRegistry } from '@polkadot/types';
import fs from 'fs';
import { Currency, NetworkIdentifier } from 'rosetta-client';

import { getRegistry } from './helpers/registry';
import { GearNetworkOptions } from './types/index';
import { GearApi } from './helpers/gear';
import config from './config';
import { getNetworkOpts, isJsonFile } from './utils';

export class GearNetworkIdentifier extends NetworkIdentifier {
  wsAddress: string;
  httpAddress: string;
  ss58Format: number;
  properties: any;
  genesis: string;
  name: string;
  specName: string;
  specVersion: number;
  transactionVersion: number;
  metadataRpc: `0x${string}`;
  rpc: Record<string, any>;
  runtime: Record<string, any>;
  registry: TypeRegistry;
  api: GearApi;
  currency: Currency;
  nodeVersion: string;

  constructor(options: GearNetworkOptions) {
    super(options.blockchain, options.network);
    for (let [key, value] of Object.entries(options)) {
      this[key] = value;
    }
    this.currency = new Currency(this.properties.tokenSymbol, this.properties.tokenDecimals);
  }
}

const networks: GearNetworkIdentifier[] = [];

export async function setNetworks() {
  const files = fs.readdirSync(config.CONFIG_DIR);
  const networkConfigs = [];
  if (config.MODE.isOnline) {
    for (const file of files) {
      if (isJsonFile(file)) {
        const data = getNetworkOpts(file);
        if (data.name.toLowerCase() === config.CONFIG_NAME.toLowerCase()) {
          networkConfigs.push(data);
          break;
        }
      }
    }
    if (networkConfigs.length === 0) {
      throw new Error(`Configuration ${config.CONFIG_NAME} not found in configuration files`);
    }
  } else {
    for (const file of files) {
      if (isJsonFile(file)) {
        const data = getNetworkOpts(file);
        networkConfigs.push(data);
      }
    }
    if (networkConfigs.length === 0) {
      throw new Error(`Network configuration files not found`);
    }
  }

  for (const nc of networkConfigs) {
    const networkIdent = new GearNetworkIdentifier(nc);
    networkIdent.registry = getRegistry(networkIdent);
    if (config.MODE.isOnline) {
      try {
        networkIdent.api = await GearApi.connect(nc);
      } catch (e) {
        console.log(e);
      }
    }
    networks.push(networkIdent);
    console.log(`Network ${networkIdent.name} added`);
  }
}

export default networks;
