import { Currency, OperationStatus as _OperationStatus } from 'rosetta-client';
import { GenericExtrinsic } from '@polkadot/types';
import { AnyTuple } from '@polkadot/types/types';

import { OperationStatus } from './enums';
import { EventRecord } from '@polkadot/types/interfaces';
import e from 'express';

export interface OperationsParams {
  opStatus: OperationStatus;
  currency: Currency;
  tx: GenericExtrinsic<AnyTuple>;
  events: EventRecord[];
}

export enum OpType {
  TRANSFER = 'Transfer',
  DEPOSIT = 'Deposit',
  WITHDRAW = 'Withdraw',
  RESERVED = 'Reserved',
  UNRESERVED = 'Unreserved',
  RESERVE_REPATRIATED = 'ReserveRepatriated',
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

export enum GearMethods {
  UPLOAD_PROGRAM = 'uploadprogram',
  SEND_MESSAGE = 'sendmessage',
  SEND_REPLY = 'sendreply',
  CLAIM_VALUE = 'claimvalue',
  RUN = 'run',
  CREATE_PROGRAM = 'createprogram',
  UPLOAD_CODE = 'uploadcode',
}

export enum BalancesMethods {
  TRANSFER = 'transfer',
  TRANSFER_KEEP_ALIVE = 'transferkeepalive',
}
