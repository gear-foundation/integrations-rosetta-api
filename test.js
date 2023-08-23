const fetch = require('node-fetch');
const { ApiPromise, Keyring, WsProvider } = require('@polkadot/api');
const { u8aToHex } = require('@polkadot/util');
const { waitReady } = require('@polkadot/wasm-crypto');

const eraPeriod = Number(process.argv[2] || '8192');

const onlineUrl = 'http://127.0.0.1:8080';
const offlineUrl = 'http://127.0.0.1:8090';
const headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

const endpoint = (path, online = true) =>
  online ? `${onlineUrl}/construction${path}` : `${offlineUrl}/construction${path}`;

const req = async (path, body) => {
  const response = await fetch(endpoint(path), { method: 'POST', body: JSON.stringify(body), headers });
  const json = await response.json();

  console.log(`\n/construction${path} res:`, json);
  return json;
};

function metadata() {
  const body = {
    network_identifier: {
      blockchain: 'gear',
      network: 'development',
    },
    options: {},
    public_keys: [
      {
        curve_type: 'edwards25519',
        hex_bytes: '0xe344fd5e18d8ef2a08bb61d1e66bd2a6c0c1a5509c6317f373793d148b0b2534',
      },
    ],
  };

  return req('/metadata', body);
}

function payloads(meta) {
  const body = {
    network_identifier: {
      blockchain: 'gear',
      network: 'development',
    },
    operations: [
      {
        operation_identifier: {
          index: 0,
        },
        type: 'Transfer',
        account: {
          address: '0xe344fd5e18d8ef2a08bb61d1e66bd2a6c0c1a5509c6317f373793d148b0b2534',
        },
        amount: {
          value: '-13163811386',
          currency: {
            symbol: 'VARA',
            decimals: 12,
          },
        },
      },
      {
        operation_identifier: {
          index: 1,
        },
        type: 'Transfer',
        account: {
          address: '0xb76abaf459aba3038788bd9aa72cd99fec13c51deacae1011a30099cd0d732ca',
        },
        amount: {
          value: '13163811386',
          currency: {
            symbol: 'VARA',
            decimals: 12,
          },
        },
      },
    ],
    metadata: meta,
    public_keys: [
      {
        curve_type: 'edwards25519',
        hex_bytes: '0xe344fd5e18d8ef2a08bb61d1e66bd2a6c0c1a5509c6317f373793d148b0b2534',
      },
    ],
  };
  return req('/payloads', body);
}

function combine(unsigned_transaction, signing_payload, signature) {
  const body = {
    network_identifier: {
      blockchain: 'gear',
      network: 'development',
    },
    signatures: [
      {
        hex_bytes: signature,
        public_key: {
          curve_type: 'edwards25519',
          hex_bytes: '0xe344fd5e18d8ef2a08bb61d1e66bd2a6c0c1a5509c6317f373793d148b0b2534',
        },
        signature_type: 'ed25519',
        signing_payload: {
          address: '0xe344fd5e18d8ef2a08bb61d1e66bd2a6c0c1a5509c6317f373793d148b0b2534',
          account_identifier: {
            address: '0xe344fd5e18d8ef2a08bb61d1e66bd2a6c0c1a5509c6317f373793d148b0b2534',
          },
          hex_bytes: signing_payload,
          signature_type: 'ed25519',
        },
      },
    ],
    unsigned_transaction,
  };
  return req('/combine', body);
}

function submit(signed_transaction) {
  const body = {
    signed_transaction,
    network_identifier: {
      blockchain: 'gear',
      network: 'development',
    },
  };
  return req('/submit', body);
}

const main = async () => {
  await waitReady();
  const srkeyring = new Keyring({ type: 'sr25519' });
  const edkeyring = new Keyring({ type: 'ed25519' });
  const alice = srkeyring.addFromUri('//Alice');
  const pair = edkeyring.addFromMnemonic('loud robot decade broccoli february can market climb say post polar seat');

  const provider = new WsProvider('ws://127.0.0.1:9944');
  const api = await ApiPromise.create({ provider });
  await new Promise((resolve, reject) =>
    api.tx.balances.transfer(pair.address, 1_000_000_000_000).signAndSend(alice, ({ events }) => {
      events.forEach(({ event: { method } }) => {
        if (method === 'ExtrinsicSuccess') {
          resolve(0);
        } else if (method === 'ExtrinsicFailed') {
          reject();
        }
      });
    }),
  );

  const meta = await metadata();

  meta.metadata.eraPeriod = eraPeriod;

  const _payloads = await payloads(meta.metadata);

  const sig = u8aToHex(pair.sign('0x' + _payloads.payloads[0].hex_bytes)).slice(2);
  console.log('\nSignature:', sig);

  // const signature = await rl.question('Enter the signature:\n');
  // console.log(sig === signature);

  const combined = await combine(_payloads.unsigned_transaction, _payloads.payloads[0].hex_bytes, sig);

  const _submit = await submit(combined.signed_transaction);

  if (_submit.code) {
    throw new Error(_submit.message);
  } else {
    console.log('\nPassed');
  }
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
