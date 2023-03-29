import { AccountIdentifier, Amount, Operation, OperationIdentifier } from 'rosetta-client';
import { Balance, EventRecord } from '@polkadot/types/interfaces';
import { BN } from '@polkadot/util';

import { BalancesMethods, ExtrisicStatus, GearMethods, OperationsParams, OperationStatus, OpType } from '../types';
import { u128 } from '@polkadot/types-codec';
import { SignedBlockExtended } from '@polkadot/api-derive/types';

export function getOperations({ opStatus, tx, currency, events }: OperationsParams) {
  const operations = [];

  const depositEvents = events.filter(
    ({ event: { section, method } }) => section.toLowerCase() === 'balances' && method.toLowerCase() === 'deposit',
  );

  const withdrawEvents = events.filter(
    ({ event: { section, method } }) => section.toLowerCase() === 'balances' && method.toLowerCase() === 'withdraw',
  );

  const reservedEvents = events.filter(
    ({ event: { section, method } }) => section.toLowerCase() === 'balances' && method.toLowerCase() === 'reserved',
  );

  const unreservedEvents = events.filter(
    ({ event: { section, method } }) => section.toLowerCase() === 'balances' && method.toLowerCase() === 'unreserved',
  );

  const reserveRepatriatedEvents = events.filter(
    ({ event: { section, method } }) =>
      section.toLowerCase() === 'balances' && method.toLowerCase() === 'reserverepatriated',
  );

  // Collect transfer operations
  if (
    tx.method.section.toLowerCase() === 'balances' &&
    txMethods.balances.includes(tx.method.method.toLowerCase() as BalancesMethods)
  ) {
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
  } of withdrawEvents) {
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
  } of depositEvents) {
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
  } of reservedEvents) {
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
  } of unreservedEvents) {
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
  } of reserveRepatriatedEvents) {
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

export function getOperationStatus(events: EventRecord[]) {
  let extrinsicStatus = OperationStatus.UNKNOWN;
  for (let {
    event: { section, method },
  } of events.filter(
    ({ phase, event: { section, method } }) =>
      `${section}.${method}`.toLowerCase() === 'system.extrinsicsuccess' ||
      `${section}.${method}`.toLowerCase() === 'system.extrinsicfailed',
  )) {
    extrinsicStatus =
      `${section}.${method}`.toLowerCase() === ExtrisicStatus.SUCCESS
        ? OperationStatus.SUCCESS
        : OperationStatus.FAILURE;

    // data.forEach((data: any) => { TODO is it necessary?
    //   if (data && data.paysFee === 'Yes') {
    //     paysFee = true;
    //   }
    // });
  }
  return extrinsicStatus;
}

const txMethods = {
  balances: Object.values(BalancesMethods),
  gear: Object.values(GearMethods),
};

const isNeededTx = (section: string, method: string) =>
  section.toLowerCase() in txMethods && txMethods[section.toLowerCase()].includes(method.toLowerCase());

export const getExtrinsics = (block: SignedBlockExtended) =>
  block.block.extrinsics.filter(({ method: { method, section } }) => isNeededTx(section, method));
