import { AccountIdentifier, Amount, Operation, OperationIdentifier } from 'rosetta-client';
import { EventRecord } from '@polkadot/types/interfaces';
import { BN } from '@polkadot/util';

import { OperationsParams, OperationStatus, OpType } from '../types';
import { u128, Vec } from '@polkadot/types-codec';
import { GenericExtrinsic } from '@polkadot/types';
import { AnyTuple } from '@polkadot/types-codec/types';
import {
  isBalanceEvent,
  isBalanceSetEvent,
  isDepositEvent,
  isDustLostEvent,
  isExtrinsicFailedEvent,
  isExtrinsicSuccessEvent,
  isReservedEvent,
  isReserveRepatrEvent,
  isStatusEvent,
  isTransactionFeePaidEvent,
  isTransactionPaymentEvent,
  isTransferEvent,
  isUnreservedEvent,
  isWithdrawEvent,
} from './events';
import { isTransferTx } from './extrinsics';
import { GearApi } from './gear';

export async function getOperations(
  { opStatus, tx, currency, events }: OperationsParams,
  api: GearApi,
  parentBlockHash: string,
) {
  const operations = [];

  // Collect transfer operations
  if (isTransferTx(tx) && opStatus === OperationStatus.FAILURE) {
    const src = tx.signer.toJSON()['id'];
    const dest = tx.args[0].toJSON()['id'];

    if (src && dest) {
      const amount = new BN(tx.args[1].toString());
      operations.push(
        Operation.constructFromObject({
          operation_identifier: new OperationIdentifier(operations.length),
          type: OpType.TRANSFER,
          status: opStatus,
          account: new AccountIdentifier(dest),
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
          related_operations: [new OperationIdentifier(operations.length - 1)],
        }),
      );
    }
  }

  let transactionFeeFromAddress = null;
  let transactionFeeAmount: u128 = null;
  let transactionFeeWithdrawAmount: u128 = null;
  let transactionFeeDepositAmount: u128 = null;

  const transactionFeePaidEvent = events.find((event) => isTransactionFeePaidEvent(event));

  if (transactionFeePaidEvent) {
    const {
      event: { data },
    } = transactionFeePaidEvent;
    transactionFeeFromAddress = data[0].toString();
    transactionFeeAmount = data[1] as u128;

    const transactionFeeDebitOperation = Operation.constructFromObject({
      operation_identifier: new OperationIdentifier(operations.length),
      type: OpType.TRANSACTION_FEE_PAID,
      status: OperationStatus.SUCCESS,
      account: new AccountIdentifier(transactionFeeFromAddress),
      amount: new Amount(transactionFeeAmount.toBn().clone().neg().toString(), currency),
    });

    operations.push(transactionFeeDebitOperation);

    const withdrawEvent = events.find(
      (event) => isWithdrawEvent(event) && event.event.data[0].toString() === transactionFeeFromAddress,
    );

    if (withdrawEvent) {
      transactionFeeWithdrawAmount = withdrawEvent.event.data[1] as u128;
      const depositEvent = events.find(
        (event) =>
          isDepositEvent(event) &&
          event.event.data[0].toString() === transactionFeeFromAddress &&
          transactionFeeAmount.add(event.event.data[1] as u128).eq(transactionFeeWithdrawAmount),
      );
      if (depositEvent) {
        transactionFeeDepositAmount = depositEvent.event.data[1] as u128;
      }
    }
  }

  let transactionFeeWithdrawSkipped = false;
  let transactionFeeDepositSkipped = false;

  for (const event of events) {
    const {
      event: { data },
    } = event;

    if (isTransferEvent(event)) {
      const debitAccount = data[0].toString();
      const creditAccount = data[1].toString();
      const amount = (data[2] as u128).toBn();

      operations.push(
        Operation.constructFromObject({
          operation_identifier: new OperationIdentifier(operations.length),
          type: OpType.TRANSFER,
          status: opStatus,
          account: new AccountIdentifier(debitAccount),
          amount: new Amount(amount.clone().neg().toString(), currency),
        }),
      );

      operations.push(
        Operation.constructFromObject({
          operation_identifier: new OperationIdentifier(operations.length),
          type: OpType.TRANSFER,
          status: opStatus,
          account: new AccountIdentifier(creditAccount),
          amount: new Amount(amount.toString(), currency),
          related_operations: [new OperationIdentifier(operations.length - 1)],
        }),
      );

      continue;
    }

    if (isWithdrawEvent(event)) {
      const account = data[0].toString();
      const amount = data[1] as u128;

      const withdrawOperation = Operation.constructFromObject({
        operation_identifier: new OperationIdentifier(operations.length),
        type: OpType.WITHDRAW,
        status: OperationStatus.SUCCESS,
        account: new AccountIdentifier(account),
        amount: new Amount(amount.toBn().clone().neg().toString(), currency),
      });

      if (!transactionFeeWithdrawSkipped) {
        const accountsMatch = account === transactionFeeFromAddress;
        const amountsMatch = amount.eq(transactionFeeWithdrawAmount);

        if (accountsMatch && amountsMatch) {
          transactionFeeWithdrawSkipped = true;
          continue;
        }
      }

      operations.push(withdrawOperation);

      continue;
    }

    if (isDepositEvent(event)) {
      const account = data[0].toString();
      const amount = data[1] as u128;

      const depositOperation = Operation.constructFromObject({
        operation_identifier: new OperationIdentifier(operations.length),
        type: OpType.DEPOSIT,
        status: OperationStatus.SUCCESS,
        account: new AccountIdentifier(account),
        amount: new Amount(amount.toString(), currency),
      });

      if (!transactionFeeDepositSkipped) {
        const accountsMatch = account === transactionFeeFromAddress;
        const amountsMatch = amount.eq(transactionFeeDepositAmount);

        if (accountsMatch && amountsMatch) {
          transactionFeeDepositSkipped = true;
          continue;
        }
      }

      operations.push(depositOperation);
    }

    if (isDustLostEvent(event)) {
      const account = data[0].toString();
      const amount = data[1] as u128;

      const dustLostOperation = Operation.constructFromObject({
        operation_identifier: new OperationIdentifier(operations.length),
        type: OpType.DUST_LOST,
        status: OperationStatus.SUCCESS,
        account: new AccountIdentifier(account),
        amount: new Amount(amount.toString(), currency),
      });

      operations.push(dustLostOperation);
    }

    if (isReservedEvent(event)) {
      const account = data[0].toString();
      const amount = (data[1] as u128).toBn();

      operations.push(
        Operation.constructFromObject({
          operation_identifier: new OperationIdentifier(operations.length),
          type: OpType.RESERVED,
          status: OperationStatus.SUCCESS,
          account: new AccountIdentifier(account),
          amount: new Amount(amount.clone().neg().toString(), currency),
        }),
      );
      continue;
    }

    if (isUnreservedEvent(event)) {
      const account = data[0].toString();
      const amount = (data[1] as u128).toBn();

      operations.push(
        Operation.constructFromObject({
          operation_identifier: new OperationIdentifier(operations.length),
          type: OpType.UNRESERVED,
          status: OperationStatus.SUCCESS,
          account: new AccountIdentifier(account),
          amount: new Amount(amount.toString(), currency),
        }),
      );
      continue;
    }

    if (isReserveRepatrEvent(event)) {
      const account = data[1].toString();
      const amount = (data[2] as u128).toBn();

      operations.push(
        Operation.constructFromObject({
          operation_identifier: new OperationIdentifier(operations.length),
          type: OpType.RESERVE_REPATRIATED,
          status: OperationStatus.SUCCESS,
          account: new AccountIdentifier(account),
          amount: new Amount(amount.toString(), currency),
        }),
      );
      continue;
    }

    if (isBalanceSetEvent(event)) {
      const acc = data[0].toString();
      const balance = new BN(await api.getBalanceAtBlock(acc, parentBlockHash)['balance']);
      const setBalanceAmount = (data[1] as u128).toBn();
      const amount = setBalanceAmount.sub(balance).toString();

      operations.push(
        Operation.constructFromObject({
          operation_identifier: new OperationIdentifier(operations.length),
          type: OpType.BALANCE_SET,
          status: OperationStatus.SUCCESS,
          account: new AccountIdentifier(acc),
          amount: new Amount(amount, currency),
        }),
      );
      continue;
    }
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

      if (isBalanceEvent(e.event.section) || isTransactionPaymentEvent(e.event.section)) {
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
