import { nodeBatchRequest } from './nodeRequest';

interface IParams {
  metadataRpc?: string;
  genesis?: string;
  transactionVersion?: number;
  specVersion?: number;
  specName?: string;
  nodeVersion?: string;
  // network?: string;
  properties?: {
    ss58Format?: number;
    tokenDecimals?: number;
    tokenSymbol?: string;
  };
  ss58Format?: number;
}

export async function getChainParams(address: string): Promise<IParams> {
  const batch = [
    { id: 0, method: 'chain_getBlockHash', params: [0] },
    { id: 1, method: 'state_getMetadata' },
    { id: 2, method: 'state_getRuntimeVersion' },
    { id: 3, method: 'system_version' },
    // { id: 4, method: 'system_chain' },
    { id: 5, method: 'system_properties' },
  ];

  const batchResult = await nodeBatchRequest(address, batch);

  const params: IParams = {};

  for (let { id, result } of batchResult) {
    switch (id) {
      case 0: {
        params.genesis = result;
        break;
      }
      case 1: {
        params.metadataRpc = result;
        break;
      }
      case 2: {
        params.transactionVersion = result.transactionVersion;
        params.specName = result.specName;
        params.specVersion = result.specVersion;
        break;
      }
      case 3: {
        params.nodeVersion = result;
        break;
      }
      // case 4: {
      //   params.network = result;
      //   break;
      // }
      case 5: {
        params.properties = {
          ss58Format: result.ss58format || 42,
          tokenDecimals: result.tokenDecimals || 12,
          tokenSymbol: result.tokenSymbol || 'GRT',
        };
        params.ss58Format = result.ss58format || 42;
        break;
      }
    }
  }
  return params;
}
