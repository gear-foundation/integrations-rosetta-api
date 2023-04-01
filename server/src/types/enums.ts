export enum ExtrisicStatus {
  SUCCESS = 'system.extrinsicsuccess',
  FAILED = 'system.extrinsicfailed',
}

export enum OperationStatus {
  SUCCESS = 'SUCCESS',
  FAILURE = 'FAILURE',
  UNKNOWN = 'UNKNOWN',
}

export enum EventMethodsLC {
  TX_SUCCESS = 'extrinsicsuccess',
  TX_FAILED = 'extrinsicfailed',
  DEPOSIT = 'deposit',
  WITHDRAW = 'withdraw',
  RESERVED = 'reserved',
  UNRESERVED = 'unreserved',
  RESERVER_REPATR = 'reserverepatriated',
  TRANSFER = 'transfer',
  TRANSFER_KEEP_ALIVE = 'transferkeepalive',
}

export enum EventSectionLC {
  BALANCES = 'balances',
  SYSTEM = 'system',
}

export enum OpType {
  TRANSFER = 'Transfer',
  DEPOSIT = 'Deposit',
  WITHDRAW = 'Withdraw',
  RESERVED = 'Reserved',
  UNRESERVED = 'Unreserved',
  RESERVE_REPATRIATED = 'ReserveRepatriated',
}

export enum TxSectionLC {
  BALANCES = 'balances',
}

export enum TxMethodLC {
  TRANSFER = 'transfer',
  TRANSFER_KEEP_ALIVE = 'transferkeepalive',
}
