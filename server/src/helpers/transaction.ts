import { AccountIdentifier, Amount, Operation, OperationIdentifier } from 'rosetta-client';
import { EventRecord } from '@polkadot/types/interfaces';
import { BN } from '@polkadot/util';

import { OperationsParams, OperationStatus, OpType } from '../types';
import { u128, Vec } from '@polkadot/types-codec';
import { GenericExtrinsic } from '@polkadot/types';
import { AnyTuple } from '@polkadot/types-codec/types';
import {
  isBalanceEvent,
  isDepositEvent,
  isExtrinsicFailedEvent,
  isExtrinsicSuccessEvent,
  isReservedEvent,
  isReserveRepatrEvent,
  isStatusEvent,
  isUnreservedEvent,
  isWithdrawEvent,
} from './events';
import { isTransferTx } from './extrinsics';

export function getOperations({ opStatus, tx, currency, events }: OperationsParams) {
  const operations = [];

  // Collect transfer operations
  if (isTransferTx(tx)) {
    const src = tx.signer.toJSON()['id'];
    const dest = tx.args[0].toJSON()['id'];
    const amount = new BN(tx.args[1].toString());
    operations.push(
      Operation.constructFromObject({
        operation_identifier: new OperationIdentifier(operations.length),
        type: OpType.TRANSFER,
        status: opStatus,
        account: new AccountIdentifier(dest.toString()),
        amount: new Amount(amount.toString(), currency),
      }),
    );
    operations.push(
      Operation.constructFromObject({
        operation_identifier: new OperationIdentifier(operations.length),
        type: OpType.TRANSFER,
        status: opStatus,
        account: new AccountIdentifier(src),
        amount: new Amount(amount.clone().neg().toString(), currency),
        related_operations: [new OperationIdentifier(0)],
      }),
    );
  }

  // Collect withdraw operations
  for (const {
    event: { data },
  } of events.filter(isWithdrawEvent)) {
    operations.push(
      Operation.constructFromObject({
        operation_identifier: new OperationIdentifier(operations.length),
        type: OpType.WITHDRAW,
        status: OperationStatus.SUCCESS,
        account: new AccountIdentifier(data[0].toString()),
        amount: new Amount((data[1] as u128).toBn().neg().toString(), currency),
      }),
    );
  }

  // Collect deposit operations
  for (const {
    event: { data },
  } of events.filter(isDepositEvent)) {
    operations.push(
      Operation.constructFromObject({
        operation_identifier: new OperationIdentifier(operations.length),
        type: OpType.DEPOSIT,
        status: OperationStatus.SUCCESS,
        account: new AccountIdentifier(data[0].toString()),
        amount: new Amount((data[1] as u128).toBn().toString(), currency),
      }),
    );
  }

  // Collect reserved operations
  for (const {
    event: { data },
  } of events.filter(isReservedEvent)) {
    operations.push(
      Operation.constructFromObject({
        operation_identifier: new OperationIdentifier(operations.length),
        type: OpType.RESERVED,
        status: OperationStatus.SUCCESS,
        account: new AccountIdentifier(data[0].toString()),
        amount: new Amount((data[1] as u128).toBn().neg().toString(), currency),
      }),
    );
  }

  // Collect unreserved operations
  for (const {
    event: { data },
  } of events.filter(isUnreservedEvent)) {
    operations.push(
      Operation.constructFromObject({
        operation_identifier: new OperationIdentifier(operations.length),
        type: OpType.UNRESERVED,
        status: OperationStatus.SUCCESS,
        account: new AccountIdentifier(data[0].toString()),
        amount: new Amount((data[1] as u128).toBn().toString(), currency),
      }),
    );
  }

  // Collect reserveRepatriated operations
  for (const {
    event: { data },
  } of events.filter(isReserveRepatrEvent)) {
    operations.push(
      Operation.constructFromObject({
        operation_identifier: new OperationIdentifier(operations.length),
        type: OpType.RESERVE_REPATRIATED,
        status: OperationStatus.SUCCESS,
        account: new AccountIdentifier(data[1].toString()),
        amount: new Amount((data[2] as u128).toBn().toString(), currency),
      }),
    );
  }

  return operations;
}

export function getOperationStatus(event: EventRecord): OperationStatus {
  let extrinsicStatus = OperationStatus.UNKNOWN;
  if (isExtrinsicSuccessEvent(event.event.method)) {
    extrinsicStatus = OperationStatus.SUCCESS;
  }
  if (isExtrinsicFailedEvent(event.event.method)) {
    extrinsicStatus = OperationStatus.FAILURE;
  }
  return extrinsicStatus;
}

export function getTxsAndEvents(
  events: EventRecord[],
  txs: Vec<GenericExtrinsic<AnyTuple>>,
  txHash?: string,
): { tx: GenericExtrinsic<AnyTuple>; events: EventRecord[]; statusEvent?: EventRecord }[] {
  // Collect all extrinsic indexes and related events if there are balance events
  const txIndexEvents: Record<number, { events: EventRecord[]; statusEvent?: EventRecord }> = {};
  for (const e of events) {
    if (e.phase.isApplyExtrinsic) {
      const txIndex = e.phase.asApplyExtrinsic.toNumber();
      if (isBalanceEvent(e.event.section)) {
        if (txIndex in txIndexEvents) {
          txIndexEvents[txIndex].events.push(e);
        } else {
          txIndexEvents[txIndex] = { events: [e] };
        }
      }
      if (isStatusEvent(e.event.section, e.event.method)) {
        if (txIndex in txIndexEvents) {
          txIndexEvents[txIndex].statusEvent = e;
        }
      }
    } else {
      console.log(e.event.method);
    }
  }

  // Collect necessary extrinsics and their events together
  const res: { tx: GenericExtrinsic<AnyTuple>; events: EventRecord[]; statusEvent?: EventRecord }[] = [];
  for (const [index, tx] of txs.entries()) {
    if (index in txIndexEvents) {
      if (txHash && !tx.hash.eq(txHash)) {
        continue;
      }
      res.push({ tx, ...txIndexEvents[index] });
    }
  }

  return res;
}
