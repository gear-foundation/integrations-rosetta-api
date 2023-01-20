import { Currency, OperationStatus as _OperationStatus } from 'rosetta-client';
import { GenericExtrinsic } from '@polkadot/types';
import { AnyTuple } from '@polkadot/types/types';

import { OperationStatus } from './enums';
import { EventRecord } from '@polkadot/types/interfaces';

export interface OperationsParams {
  opStatus: OperationStatus;
  currency: Currency;
  tx: GenericExtrinsic<AnyTuple>;
  events: EventRecord[];
}

export enum OpType {
  TRANSFER = 'Transfer',
  FEE_PAID = 'TransactionFeePaid',
  DEPOSIT = 'Deposit',
  WITHDRAW = 'Withdraw',
}

export const operationStatuses = [
  {
    status: 'SUCCESS',
    successful: true,
  },
  {
    status: 'FAILURE',
    successful: false,
  },
].map((s) => new _OperationStatus(s.status, s.successful));
