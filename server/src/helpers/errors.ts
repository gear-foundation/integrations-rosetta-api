import { Error as RosettaClientError } from 'rosetta-client';

interface RosettaError {
  code: number;
  message: string;
  description?: string;
  retriable: boolean;
  details?: object;
}

export enum ApiError {
  NOT_SUPPORTED = 600,
  NOT_IMPLEMENTED = 601,
  SIG_TYPE_NOT_SUPPORTED = 602,
  NETWORK_NOT_SUPPORTED = 603,
  TRANSACTION_NOT_FOUND = 604,
  BROADCAST_TRANSACTION = 605,
  INVALID_OPERATIONS_LENGTH = 606,
  TRANSACTION_IS_OUTDATED = 607,
  TRANSACTION_BAD_SIG = 608,
  NOT_AVAILABLE_OFFLINE = 609,
  UNABLE_TO_GET_BLOCK = 610,
  INVALID_ACCOUNT_ADDRESS = 611,
  UNHANDLED_ERROR = 99999
}

const errors: Record<number, RosettaError> = {
  [ApiError.UNHANDLED_ERROR]: {
    code: ApiError.UNHANDLED_ERROR,
    message: "Encountered an unhandled error",
    retriable: false,
  },
  [ApiError.NOT_SUPPORTED]: {
    code: ApiError.NOT_SUPPORTED,
    message: 'Endpoint is not supported',
    retriable: false,
  },
  [ApiError.NOT_IMPLEMENTED]: {
    code: ApiError.NOT_IMPLEMENTED,
    message: 'Endpoint is not implemented',
    retriable: false,
  },
  [ApiError.SIG_TYPE_NOT_SUPPORTED]: {
    code: ApiError.SIG_TYPE_NOT_SUPPORTED,
    message: 'Signature type is not supported',
    retriable: false,
  },
  [ApiError.NETWORK_NOT_SUPPORTED]: {
    code: ApiError.NETWORK_NOT_SUPPORTED,
    message: 'Network is not supported',
    retriable: false,
  },
  [ApiError.TRANSACTION_NOT_FOUND]: {
    code: ApiError.TRANSACTION_NOT_FOUND,
    message: 'Transaction not found',
    retriable: false,
    details: {
      hash: '0x123456',
    },
  },
  [ApiError.BROADCAST_TRANSACTION]: {
    code: ApiError.BROADCAST_TRANSACTION,
    message: 'Broadcast transaction error',
    retriable: false,
  },
  [ApiError.INVALID_OPERATIONS_LENGTH]: {
    code: ApiError.INVALID_OPERATIONS_LENGTH,
    message: 'Operations length is invalid',
    retriable: false,
  },
  [ApiError.TRANSACTION_IS_OUTDATED]: {
    code: ApiError.TRANSACTION_IS_OUTDATED,
    message: 'Transaction is outdated',
    retriable: false,
  },
  [ApiError.TRANSACTION_BAD_SIG]: {
    code: ApiError.TRANSACTION_BAD_SIG,
    message: 'Transaction has a bad signature',
    retriable: false,
  },
  [ApiError.NOT_AVAILABLE_OFFLINE]: {
    code: ApiError.NOT_AVAILABLE_OFFLINE,
    message: 'Endpoint is not available in offline mode',
    retriable: false,
  },
  [ApiError.UNABLE_TO_GET_BLOCK]: {
    code: ApiError.UNABLE_TO_GET_BLOCK,
    message: 'Unable to retrieve block by specified hash or number',
    retriable: false,
    details: {
      hash: '0x',
      number: '0',
    },
  },
  [ApiError.INVALID_ACCOUNT_ADDRESS]: {
    code: ApiError.INVALID_ACCOUNT_ADDRESS,
    message: 'Account address is invalid',
    retriable: false,
  }
};

export function constructRosettaError(errorCode: ApiError, details?: object) {
  const { message, retriable, code } = errors[errorCode];
  return RosettaClientError.constructFromObject({ code, message, retriable, details });
}

export function throwError(errorCode: ApiError, metadata?: object, error?: Error) {
  let rosettaDetails: Record<string, any> = {};

  if(metadata !== undefined) {
    rosettaDetails = { ...metadata };
  }

  if (error !== undefined) {
    const errorDetails: object = {
      message: error.message,
      error_type: error.constructor.name,
      stack_trace: error.stack
    };

    rosettaDetails.error = errorDetails;
  }

  throw constructRosettaError(errorCode, rosettaDetails);
}

export const allErrors = Object.values(errors).map(
  ({ code, message, retriable }) => new RosettaClientError(code, message, retriable),
);

export function isRosettaError(error: object): boolean {
  if(error === undefined || error === null) {
    return false;
  }
  
  if (!error.hasOwnProperty('code')) {
    return false;
  }
  if (!error.hasOwnProperty('message')) {
    return false;
  }
  if (!error.hasOwnProperty('retriable')) {
    return false;
  }
  
  return true;
}
