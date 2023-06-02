import { Error } from 'rosetta-client';

interface E {
  message: string;
  description?: string;
  retriable: boolean;
  details?: object;
}

export enum ApiError {
  NOT_SUPPORTED,
  NOT_IMPLEMENTED,
  SIG_TYPE_NOT_SUPPORTED,
  NETWORK_NOT_SUPPORTED,
  TRANSACTION_NOT_FOUND,
  BROADCAST_TRANSACTION,
  INVALID_OPERATIONS_LENGTH,
  TRANSACTION_IS_OUTDATED,
  TRANSACTION_BAD_SIG,
  NOT_AVAILABLE_OFFLINE,
  UNABLE_TO_GET_BLOCK,
  INVALID_ACCOUNT_ADDRESS,
}

const errors: Record<number, E> = {
  [ApiError.NOT_SUPPORTED]: {
    message: 'Endpoint is not supported',
    retriable: false,
  },
  [ApiError.NOT_IMPLEMENTED]: {
    message: 'Endpoint is not implemented',
    retriable: false,
  },
  [ApiError.SIG_TYPE_NOT_SUPPORTED]: {
    message: 'Signature type is not supported',
    retriable: false,
  },
  [ApiError.NETWORK_NOT_SUPPORTED]: {
    message: 'Network is not supported',
    retriable: false,
  },
  [ApiError.TRANSACTION_NOT_FOUND]: {
    message: 'Transaction not found',
    retriable: false,
    details: {
      hash: '0x123456',
    },
  },
  [ApiError.BROADCAST_TRANSACTION]: {
    message: 'Broadcast transaction error',
    retriable: false,
  },
  [ApiError.INVALID_OPERATIONS_LENGTH]: {
    message: 'Operations length is invalid',
    retriable: false,
  },
  [ApiError.TRANSACTION_IS_OUTDATED]: {
    message: 'Transaction is outdated',
    retriable: false,
  },
  [ApiError.TRANSACTION_BAD_SIG]: {
    message: 'Transaction has a bad signature',
    retriable: false,
  },
  [ApiError.NOT_AVAILABLE_OFFLINE]: {
    message: 'Endpoint is not available in offline mode',
    retriable: false,
  },
  [ApiError.UNABLE_TO_GET_BLOCK]: {
    message: 'Unable to retrieve block by specified hash or number',
    retriable: false,
    details: {
      hash: '0x',
      number: '0',
    },
  },
  [ApiError.INVALID_ACCOUNT_ADDRESS]: {
    message: 'Account address is invalid',
    retriable: false,
  },
};

const code = 500;

export function throwError(errorCode: ApiError, details?: object) {
  const { message, retriable } = errors[errorCode];
  throw Error.constructFromObject({ code, message, retriable, details });
}

export const allErrors = Object.values(errors).map((e) => new Error(code, e.message, e.retriable));
