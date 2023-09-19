import { EventRecord } from '@polkadot/types/interfaces';
import { EventMethodsLC, EventSectionLC } from '../types';

export const isBalanceEvent = (section: string) => section.toLowerCase() === EventSectionLC.BALANCES;

export const isStakingEvent = (section: string) => section.toLowerCase() === EventSectionLC.STAKING;

export const isTransactionPaymentEvent = (section: string) => section.toLowerCase() === EventSectionLC.TRANSACTION_PAYMENT;

export const isExtrinsicSuccessEvent = (method: string) => method.toLowerCase() === EventMethodsLC.TX_SUCCESS;

export const isExtrinsicFailedEvent = (method: string) => method.toLowerCase() === EventMethodsLC.TX_FAILED;

export const isStatusEvent = (section: string, method: string) =>
  section.toLowerCase() === EventSectionLC.SYSTEM &&
  (isExtrinsicSuccessEvent(method) || isExtrinsicFailedEvent(method));

export const isDepositEvent = ({ event: { section, method } }: EventRecord) =>
  isBalanceEvent(section) && method.toLowerCase() === EventMethodsLC.DEPOSIT;

export const isWithdrawEvent = ({ event: { section, method } }: EventRecord) =>
  isBalanceEvent(section) && method.toLowerCase() === EventMethodsLC.WITHDRAW;

  export const isDustLostEvent = ({ event: { section, method } }: EventRecord) =>
  isBalanceEvent(section) && method.toLowerCase() === EventMethodsLC.DUST_LOST;

export const isReservedEvent = ({ event: { section, method } }: EventRecord) =>
  isBalanceEvent(section) && method.toLowerCase() === EventMethodsLC.RESERVED;

export const isUnreservedEvent = ({ event: { section, method } }: EventRecord) =>
  isBalanceEvent(section) && method.toLowerCase() === EventMethodsLC.UNRESERVED;

export const isReserveRepatrEvent = ({ event: { section, method } }: EventRecord) =>
  isBalanceEvent(section) && method.toLowerCase() === EventMethodsLC.RESERVER_REPATR;

export const isTransferEvent = ({ event: { section, method } }: EventRecord) =>
  isBalanceEvent(section) && method.toLowerCase() === EventMethodsLC.TRANSFER;

export const isTransactionFeePaidEvent = ({ event: { section, method }}: EventRecord) =>
  isTransactionPaymentEvent(section) && method.toLowerCase() == EventMethodsLC.TRANSACTION_FEE_PAID

export const isBalanceSetEvent = ({ event: { section, method } }: EventRecord) =>
  isBalanceEvent(section) && method.toLowerCase() === EventMethodsLC.BALANCE_SET;

  export const isStakingRewardedEvent = ({ event: { section, method } }: EventRecord) =>
  isStakingEvent(section) && method.toLowerCase() === EventMethodsLC.REWARDED;
