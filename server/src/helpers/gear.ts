import { ApiPromise, WsProvider } from '@polkadot/api';
import { ApiDecoration } from '@polkadot/api/types';
import { Header, Index, SignedBlock } from '@polkadot/types/interfaces';
import { BlockIdentifier, Peer, SyncStatus } from 'rosetta-client';

import { NetworkConfig } from '../types';
import logger from '../logger';
import { ApiError, throwError } from './errors';
import { u64 } from '@polkadot/types-codec';

export class GearApi {
  provider: WsProvider;
  api: ApiPromise;
  genesis: string;
  rpc: Record<string, any>;
  runtime: Record<string, any>;
  signedExtensions: Record<string, any>;

  constructor({ rpc, runtime, wsAddress, signedExtensions }: NetworkConfig) {
    this.provider = new WsProvider(wsAddress);
    this.rpc = rpc;
    this.runtime = runtime;
    this.signedExtensions = signedExtensions;
  }

  private async connect() {
    this.api = await ApiPromise.create({
      provider: this.provider,
      rpc: this.rpc,
      runtime: this.runtime,
      signedExtensions: this.signedExtensions,
    });

    this.api.on('connected', () => {
      logger.info('Connected established!');
    });

    this.api.on('disconnected', () => {
      logger.warn('Disconnected from node. Attempting to reconnect.');
      this.connect();
    });

    this.api.on('error', (err: Error) => {
      logger.error(
        'An error occurred with the node connection. Sleeping for 60 seconds then attempting to reconnect.',
        { error: err },
      );

      const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
      sleep(60000).then(this.connect);
    });

    this.genesis = this.api.genesisHash.toHex();
  }

  static async connect(config: NetworkConfig): Promise<GearApi> {
    const api = new GearApi(config);
    await api.connect();
    return api;
  }

  async getBlock(at: string | number | undefined): Promise<{ block: SignedBlock; apiAt: ApiDecoration<'promise'> }> {
    try {
      const hash =
        typeof at === 'string'
          ? at
          : typeof at === 'number'
            ? await this.api.rpc.chain.getBlockHash(at)
            : await this.api.rpc.chain.getBlockHash();

      const [block, apiAt] = await Promise.all([this.api.rpc.chain.getBlock(hash), this.api.at(hash)]);

      return { block, apiAt };
    } catch (err) {
      const errorMetadata = typeof at === 'string' ? { hash: at } : typeof at === 'number' ? { index: at } : undefined;

      throwError(ApiError.UNABLE_TO_GET_BLOCK, errorMetadata, err);
    }
  }

  async getBlockIdent(at?: string | number): Promise<[BlockIdentifier, number, SignedBlock, ApiDecoration<'promise'>]> {
    const { block, apiAt } = await this.getBlock(at);

    const ts = ((await apiAt.query.timestamp.now()) as u64).toNumber();

    const [blockIndex, blockHash] = [block.block.header.number.toNumber(), block.block.hash.toHex()];

    return [new BlockIdentifier(blockIndex, blockHash), ts, block, apiAt];
  }

  async getBalanceAtBlock(address: string, blockHash: string): Promise<{ balance: string; nonce: string }> {
    const apiAt = await this.apiAt(blockHash);
    const accountData = await apiAt.query.system.account(address);

    return {
      balance: accountData.data.free.toString(),
      nonce: accountData.nonce.toString(),
    };
  }

  async getSigningInfo(pk: string) {
    const nonce = (await this.api.query.system.account(pk)).nonce.toNumber();
    const signingInfo = (await this.api.derive.tx.signingInfo(pk, nonce)) as {
      header: Header;
      mortalLength: number;
      nonce: Index;
    };
    const blockNumber = signingInfo.header.number.toNumber();
    const blockHash = await this.api.rpc.chain.getBlockHash(signingInfo.header.number.unwrap());
    const eraPeriod = signingInfo.mortalLength;

    const runtimeInfo = this.api.runtimeVersion;
    const specVersion: number = runtimeInfo.specVersion.toNumber();
    const transactionVersion: number = runtimeInfo.transactionVersion.toNumber();

    return {
      nonce,
      blockHash,
      blockNumber,
      eraPeriod,
      specVersion,
      transactionVersion,
    };
  }

  async apiAt(hash: string) {
    try {
      return await this.api.at(hash);
    } catch (err) {
      throwError(ApiError.UNABLE_TO_GET_BLOCK, { hash: hash }, err);
    }
  }

  async syncState(): Promise<SyncStatus> {
    const syncState = await this.api.rpc.system.syncState();
    const current_index = syncState.currentBlock.toNumber();
    const target_index = syncState.highestBlock
      .unwrapOr((await this.api.rpc.chain.getBlock()).block.header.number)
      .toNumber();
    return SyncStatus.constructFromObject({ current_index, target_index, synced: current_index === target_index }, {});
  }

  async peers(): Promise<Peer[]> {
    const peers = await this.api.rpc.system.peers();
    return peers.map((peer) => Peer.constructFromObject({ peer_id: peer.peerId.toHex() }, {}));
  }
}
