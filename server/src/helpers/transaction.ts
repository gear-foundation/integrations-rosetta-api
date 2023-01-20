import { AccountIdentifier, Amount, Operation, OperationIdentifier } from 'rosetta-client';
import { EventRecord } from '@polkadot/types/interfaces';
import { BN } from '@polkadot/util';

import { ExtrisicStatus, OperationsParams, OperationStatus, OpType } from '../types';
import { u128 } from '@polkadot/types-codec';

export function getOperations({ opStatus, tx, currency, events }: OperationsParams) {
  const operations = [];

  const source = tx.signer.toJSON()['id'];
  const dest = tx.args[0].toJSON()['id'];
  const amount = new BN(tx.args[1].toString());

  const depositEvent = events.find(({ event: { section, method } }) => section === 'balances' && method === 'Deposit');

  const withdrawEvent = events.find(
    ({ event: { section, method } }) => section === 'balances' && method === 'Withdraw',
  );

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
      account: new AccountIdentifier(source),
      amount: new Amount(amount.clone().neg().toString(), currency),
      related_operations: [new OperationIdentifier(0)],
    }),
  );
  if (withdrawEvent) {
    operations.push(
      Operation.constructFromObject({
        operation_identifier: new OperationIdentifier(operations.length),
        type: OpType.WITHDRAW,
        status: opStatus,
        account: new AccountIdentifier(withdrawEvent.event.data[0].toString()),
        amount: new Amount((withdrawEvent.event.data[1] as u128).toBn().neg().toString(), currency),
      }),
    );
  }
  if (depositEvent) {
    operations.push(
      Operation.constructFromObject({
        operation_identifier: new OperationIdentifier(operations.length),
        type: OpType.DEPOSIT,
        status: opStatus,
        account: new AccountIdentifier(depositEvent.event.data[0].toString()),
        amount: new Amount((depositEvent.event.data[1] as u128).toBn().toString(), currency),
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
