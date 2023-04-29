import { BlockIdentifier } from 'rosetta-client';
import { AccountInfo, Header, Index } from '@polkadot/types/interfaces';
import { SignedBlockExtended } from '@polkadot/api-derive/types';
import { ApiPromise, WsProvider } from '@polkadot/api';
import { NetworkConfig } from 'types';
import { ApiError, throwError } from './errors';
import logger from '../logger';

export class GearApi {
  provider: WsProvider;
  api: ApiPromise;
  genesis: string;
  rpc: Record<string, any>;
  runtime: Record<string, any>;

  constructor({ rpc, runtime, wsAddress }: NetworkConfig) {
    this.provider = new WsProvider(wsAddress);
    this.rpc = rpc;
    this.runtime = runtime;
  }

  private async connect() {
    this.api = await ApiPromise.create({ provider: this.provider, rpc: this.rpc, runtime: this.runtime });
    this.api.on('disconnected', () => {
      console.log('Reconnection...');
      this.connect();
    });
    this.genesis = this.api.genesisHash.toHex();
    return this.api;
  }

  static async connect(config: NetworkConfig): Promise<GearApi> {
    const api = new GearApi(config);
    await api.connect();
    return api;
  }

  async getBlock(at: string | number | undefined): Promise<SignedBlockExtended> {
    try {
      if (typeof at === 'string') {
        return await this.api.derive.chain.getBlock(at);
      }
      if (typeof at === 'number') {
        return await this.api.derive.chain.getBlockByNumber(at);
      }
      const hash = await this.api.rpc.chain.getBlockHash();
      return await this.api.derive.chain.getBlock(hash);
    } catch (err) {
      logger.error(`Unable to get block ${at}`);
      console.error(err);
      throwError(ApiError.UNABLE_TO_GET_BLOCK, typeof at === 'string' ? { hash: at } : { number: at });
    }
  }

  async getBlockIdent(at?: string | number): Promise<[BlockIdentifier, number, SignedBlockExtended]> {
    const block = await this.getBlock(at);

    const apiAt = await this.apiAt(block.block.hash.toHex());

    const ts = (await apiAt.query.timestamp.now()).toNumber();

    const [blockIndex, blockHash] = [block.block.header.number.toNumber(), block.block.hash.toHex()];

    return [new BlockIdentifier(blockIndex, blockHash), ts, block];
  }

  async getBalanceAtBlock(address: string, blockHash: string): Promise<string> {
    const apiAt = await this.apiAt(blockHash);
    const {
      data: { free },
    } = await apiAt.query.system.account(address);
    return free.toString();
  }

  async getSigningInfo(pk: string) {
    const nonce = ((await this.api.query.system.account(pk)) as AccountInfo).nonce.toNumber();
    const signingInfo = (await this.api.derive.tx.signingInfo(pk, nonce)) as {
      header: Header;
      mortalLength: number;
      nonce: Index;
    };
    const blockNumber = signingInfo.header.number.toNumber();
    const blockHash = await this.api.rpc.chain.getBlockHash(signingInfo.header.number.unwrap());
    const eraPeriod = signingInfo.mortalLength;

    return {
      nonce,
      blockHash,
      blockNumber,
      eraPeriod,
    };
  }

  async apiAt(hash: string) {
    try {
      return await this.api.at(hash);
    } catch (err) {
      logger.error(`Unable to get api instance at ${hash}`);
      console.log(err);
      throwError(ApiError.UNABLE_TO_GET_BLOCK, { hash });
    }
  }
}
