import { hexAddPrefix, hexStripPrefix, isHex, u8aToHex } from '@polkadot/util';
import { decodeAddress } from '@polkadot/keyring';
import { ApiError, throwError } from './errors';

const PK_BYTES_LENGTH = 32;

function validateAndGetU8aAddress(address: string): Uint8Array {
  try {
    const u8a = decodeAddress(address);
    if (u8a.length !== PK_BYTES_LENGTH) {
      throw new Error();
    }
    return u8a;
  } catch (err) {
    throwError(ApiError.INVALID_ACCOUNT_ADDRESS);
  }
}

export function getHexPrefixedAddress(address: string): string {
  let result: Uint8Array;
  if (isHex(address)) {
    result = validateAndGetU8aAddress(address);
  } else {
    try {
      result = validateAndGetU8aAddress(address);
    } catch (err) {
      address = hexAddPrefix(address);
      result = validateAndGetU8aAddress(address);
    }
  }
  return u8aToHex(result);
}

export function getNonHexPrefixedAddress(address: string): string {
  let result: Uint8Array;
  if (isHex(address)) {
    result = validateAndGetU8aAddress(address);
  } else {
    const hexPrefixedAddress = hexAddPrefix(address);
    if (isHex(hexPrefixedAddress)) {
      result = validateAndGetU8aAddress(hexPrefixedAddress);
    } else {
      result = validateAndGetU8aAddress(address);
    }
  }
  return hexStripPrefix(u8aToHex(result));
}
