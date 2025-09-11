import { GenericExtrinsic } from '@polkadot/types';
import { AnyTuple } from '@polkadot/types-codec/types';

import { TxMethodLC, TxSectionLC } from '../types';

const TRANSFER_METHODS: string[] = [
  TxMethodLC.TRANSFER,
  TxMethodLC.TRANSFER_KEEP_ALIVE,
  TxMethodLC.TRANSFER_ALLOW_DEATH,
  TxMethodLC.TRANSFER_ALL
];

export const isTransferTx = ({ method: { method, section } }: GenericExtrinsic<AnyTuple>) =>
  section.toLowerCase() === TxSectionLC.BALANCES && TRANSFER_METHODS.includes(method.toLocaleLowerCase());
