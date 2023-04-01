import { GenericExtrinsic } from '@polkadot/types';
import { AnyTuple } from '@polkadot/types-codec/types';

import { TxMethodLC, TxSectionLC } from '../types';

export const isTransferTx = ({ method: { method, section } }: GenericExtrinsic<AnyTuple>) =>
  section.toLowerCase() === TxSectionLC.BALANCES &&
  (method.toLowerCase() === TxMethodLC.TRANSFER || method.toLowerCase() === TxMethodLC.TRANSFER_KEEP_ALIVE);
