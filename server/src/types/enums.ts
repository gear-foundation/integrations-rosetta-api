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
  BALANCE_SET = 'balanceset',
  TRANSACTION_FEE_PAID = 'transactionfeepaid',
  DUST_LOST = 'dustlost',
}

export enum EventSectionLC {
  BALANCES = 'balances',
  TRANSACTION_PAYMENT = 'transactionpayment',
  SYSTEM = 'system',
}

export enum OpType {
  TRANSFER = 'Transfer',
  DEPOSIT = 'Deposit',
  WITHDRAW = 'Withdraw',
  RESERVED = 'Reserved',
  UNRESERVED = 'Unreserved',
  RESERVE_REPATRIATED = 'ReserveRepatriated',
  BALANCE_SET = 'BalanceSet',
  TRANSACTION_FEE_PAID = 'TransactionFeePaid',
  DUST_LOST = 'DustLost',
}

export const opTypes = Object.values(OpType);

export enum TxSectionLC {
  BALANCES = 'balances',
}

export enum TxMethodLC {
  TRANSFER = 'transfer',
  TRANSFER_KEEP_ALIVE = 'transferkeepalive',
  TRANSFER_ALLOW_DEATH = 'transferallowdeath',
  TRANSFER_ALL = 'transferall',
}
