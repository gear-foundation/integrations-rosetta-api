import { TypeRegistry } from '@polkadot/types';
import fs from 'fs';
import { Currency, NetworkIdentifier } from 'rosetta-client';
import { getChainParams } from 'gear-util';

import { getRegistry } from './helpers/registry';
import { GearNetworkOptions, NetworkProperties } from './types/index';
import { GearApi } from './helpers/gear';
import config from './config';
import { getNetworkOpts, isJsonFile } from './utils';
import logger from './logger';

export class GearNetworkIdentifier extends NetworkIdentifier {
  wsAddress: string;
  httpAddress: string;
  ss58Format: number;
  properties: NetworkProperties;
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
  signedExtensions: Record<string, any>;
  existentialDeposit: string;

  constructor(options: GearNetworkOptions) {
    super(options.blockchain, options.network);
    Object.assign(this, options);
    this.currency = new Currency(this.properties.tokenSymbol, this.properties.tokenDecimals);
  }
}

async function updateNetworkParams(data: GearNetworkOptions) {
  if (config.WS !== undefined) {
    logger.info(`Setting custom ws address of ${data.network} to ${config.WS}`);
    data.wsAddress = config.WS;
  }
  if (config.HTTP !== undefined) {
    logger.info(`Setting custom http address of ${data.network} to ${config.HTTP}`);
    data.httpAddress = config.HTTP;
  }
  if (config.UPDATE_CONFIG) {
    logger.info(`Request chain params of ${data.network}`);
    const params = await getChainParams(data.httpAddress);
    for (const k of Object.keys(params)) {
      data[k] = params[k];
    }
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
          await updateNetworkParams(data);
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
        await updateNetworkParams(data);
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
        logger.error(null, e);
      }
    }
    networks.push(networkIdent);
    logger.info(`Network ${networkIdent.name} added`);
  }
  return networks;
}

export default networks;
