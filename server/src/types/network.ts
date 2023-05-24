export interface GearNetworkOptions extends NetworkConfig {
  genesis: string;
  specName: string;
  specVersion: number;
  transactionVersion: number;
  metadataRpc: string;
}

export interface NetworkProperties {
  ss58Format: number;
  tokenDecimals: number;
  tokenSymbol: string;
}

export interface NetworkConfig {
  blockchain: string;
  network: string;
  name: string;
  wsAddress: string;
  httpAddress: string;
  ss58Format: number;
  properties: NetworkProperties;
  rpc: Record<string, any>;
  runtime: Record<string, any>;
  signedExtensions: Record<string, any>;
}
