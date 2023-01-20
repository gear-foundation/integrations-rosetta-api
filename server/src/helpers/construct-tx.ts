import { methods, deriveAddress, decode } from '@substrate/txwrapper-polkadot';
import { EXTRINSIC_VERSION } from '@polkadot/types/extrinsic/v4/Extrinsic';

import { GearNetworkIdentifier } from '../networks';
import { hexToString, hexToU8a, stringToHex, u8aConcat, u8aToHex } from '@polkadot/util';

export interface TxParams {
  dest: string;
  value: string;
  source: string;
  blockHash: string;
  blockNumber: number;
  eraPeriod: number;
  nonce: number;
  networkIdent: GearNetworkIdentifier;
}

export function constructTx({
  dest,
  value,
  source,
  blockHash,
  blockNumber,
  eraPeriod,
  nonce,
  networkIdent: { genesis, registry, specVersion, transactionVersion, metadataRpc },
}: TxParams) {
  const unsigned = methods.balances.transferKeepAlive(
    { dest, value },
    {
      address: deriveAddress(source, 42),
      blockHash,
      blockNumber,
      eraPeriod,
      nonce,
      genesisHash: genesis,
      metadataRpc: metadataRpc,
      specVersion,
      transactionVersion,
    },
    {
      metadataRpc: metadataRpc,
      registry,
    },
  );

  const { method, version, address } = unsigned;
  const unsignedTx = stringToHex(JSON.stringify({ method, version, address, nonce, era: unsigned.era }));

  const signingPayload = u8aToHex(
    registry.createType('ExtrinsicPayload', unsigned, { version: EXTRINSIC_VERSION }).toU8a({ method: true }),
  ).slice(2);

  return {
    unsignedTx,
    signingPayload,
  };
}

export function constructSignedTx(unsigned: any, signature: string, { registry }: GearNetworkIdentifier) {
  const sigU8a = hexToU8a(`0x${signature}`);
  const header = new Uint8Array(1);
  header[0] = 0;
  const sigWithHeader = u8aConcat(header, sigU8a);
  const tx = JSON.parse(hexToString(unsigned));
  const extrinsic = registry.createType('Extrinsic', tx, { version: tx.version });
  extrinsic.addSignature(tx.address, sigWithHeader, tx);
  return extrinsic.toHex();
}

export function parseTransaction(
  transaction: string,
  signed: boolean,
  { registry, metadataRpc }: GearNetworkIdentifier,
): { source: string; dest: string; value: string } {
  const tx = signed
    ? decode(transaction, { registry, metadataRpc })
    : decode(JSON.parse(hexToString(transaction)), { registry, metadataRpc });
  const source = tx.address;
  const dest = tx.method.args.dest['id'];
  const value = tx.method.args.value as string;
  return { source, dest, value };
}
