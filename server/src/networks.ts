import { TypeRegistry } from '@polkadot/types';
import fs from 'fs';
import path from 'path';
import { Currency, NetworkIdentifier } from 'rosetta-client';

import { getChainParams } from './helpers/getChainParams';
import { getRegistry } from './helpers/registry';
import { GearNetworkOptions, NetworkConfig } from './types/index';
import { GearApi } from './helpers/gear';

const networksFolder = './networks';

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
  types: any;
  metadataRpc: `0x${string}`;
  rpc: Record<string, any>;
  runtime: Record<string, any>;
  registry: TypeRegistry;
  api: GearApi;
  currency: Currency;

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
  const files = fs.readdirSync(networksFolder);
  for (const file of files) {
    if (file.indexOf('.json') > -1) {
      const data: NetworkConfig = JSON.parse(fs.readFileSync(path.join(networksFolder, file), 'utf-8'));
      let params;

      try {
        params = await getChainParams(data.httpAddress);
      } catch (e) {
        console.log(`Node on ${data.httpAddress} is unavailable`);
        continue;
      }

      const networkIdent = new GearNetworkIdentifier({
        ...data,
        ...params,
      });
      networkIdent.registry = getRegistry(networkIdent);
      try {
        networkIdent.api = await GearApi.connect(data);
      } catch (e) {
        console.log(e);
      }
      networks.push(networkIdent);
      console.log(`Network ${networkIdent.name} added`);
    }
  }
}

export default networks;
