export interface GearNetworkOptions {
  blockchain: string;
  network: string;
  wsAddress: string;
  httpAddress: string;
  ss58Format: number;
  properties: any;
  genesis: string;
  name: string;
  specName: string;
  specVersion: number;
  transactionVersion: number;
  metadataRpc: string;
  rpc: Record<string, any>;
  runtime: Record<string, any>;
}

export interface NetworkConfig {
  blockchain: string;
  network: string;
  name: string;
  wsAddress: string;
  httpAddress: string;
  ss58Format: number;
  properties: {
    ss58Format: number;
    tokenDecimals: number;
    tokenSymbol: string;
  };
  rpc: Record<string, any>;
  runtime: Record<string, any>;
}
