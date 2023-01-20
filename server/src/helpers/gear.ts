import { BlockIdentifier, TransactionIdentifierResponse } from 'rosetta-client';
import { AccountInfo, Header, Index } from '@polkadot/types/interfaces';
import { SignedBlockExtended } from '@polkadot/api-derive/types';
import { ApiPromise, WsProvider } from '@polkadot/api';
import { u8aToHex } from '@polkadot/util';
import { NetworkConfig } from 'types';

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
    this.genesis = this.api.genesisHash.toHex();
    return this.api;
  }

  static async connect(config: NetworkConfig): Promise<GearApi> {
    const api = new GearApi(config);
    await api.connect();
    return api;
  }

  async getBlock(at: string | number | undefined): Promise<SignedBlockExtended> {
    if (typeof at === 'string') {
      return this.api.derive.chain.getBlock(at);
    }
    if (typeof at === 'number') {
      return this.api.derive.chain.getBlockByNumber(at);
    }
    const hash = await this.api.rpc.chain.getBlockHash();
    return this.api.derive.chain.getBlock(hash);
  }

  async getBlockIdent(at?: string | number): Promise<[BlockIdentifier, number, SignedBlockExtended]> {
    const block = await this.getBlock(at);

    const apiAt = await this.api.at(block.block.hash);
    const ts = (await apiAt.query.timestamp.now()).toNumber();

    const [blockIndex, blockHash] = [block.block.header.number.toNumber(), block.block.hash.toHex()];

    return [new BlockIdentifier(blockIndex, blockHash), ts, block];
  }

  async getBalanceAtBlock(address: string, blockHash: string) {
    const apiAt = (await this.api.at(blockHash)) as any;
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

  async getAccountNonce(pk: string) {
    const nonce = (await this.api.query.system.account(pk)).nonce;
    return nonce.toNumber();
  }

  async submitTransaction(tx: `0x${string}`) {
    const txHash = await this.api.rpc.author.submitExtrinsic(tx);
    return new TransactionIdentifierResponse({
      hash: u8aToHex(txHash),
    });
  }

  async getNodeVersion() {
    const version = await this.api.rpc.system.version();
    return version.toString();
  }
}
