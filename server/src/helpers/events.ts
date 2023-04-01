import { EventRecord } from '@polkadot/types/interfaces';
import { EventMethodsLC, EventSectionLC } from '../types';

export const isBalanceEvent = (section: string) => section.toLowerCase() === EventSectionLC.BALANCES;

export const isExtrinsicSuccessEvent = (method: string) => method.toLowerCase() === EventMethodsLC.TX_SUCCESS;
export const isExtrinsicFailedEvent = (method: string) => method.toLowerCase() === EventMethodsLC.TX_FAILED;

export const isStatusEvent = (section: string, method: string) =>
  section.toLowerCase() === EventSectionLC.SYSTEM &&
  (isExtrinsicSuccessEvent(method) || isExtrinsicFailedEvent(method));

export const isDepositEvent = ({ event: { section, method } }: EventRecord) =>
  isBalanceEvent(section) && method.toLowerCase() === EventMethodsLC.DEPOSIT;

export const isWithdrawEvent = ({ event: { section, method } }: EventRecord) =>
  isBalanceEvent(section) && method.toLowerCase() === EventMethodsLC.WITHDRAW;

export const isReservedEvent = ({ event: { section, method } }: EventRecord) =>
  isBalanceEvent(section) && method.toLowerCase() === EventMethodsLC.RESERVED;

export const isUnreservedEvent = ({ event: { section, method } }: EventRecord) =>
  isBalanceEvent(section) && method.toLowerCase() === EventMethodsLC.UNRESERVED;

export const isReserveRepatrEvent = ({ event: { section, method } }: EventRecord) =>
  isBalanceEvent(section) && method.toLowerCase() === EventMethodsLC.RESERVER_REPATR;
