const { ApiPromise } = require('@polkadot/api');
const { Keyring } = require('@polkadot/keyring');

const main = async () => {
  const api = await ApiPromise.create();
  const keyring = new Keyring();
  const alice = keyring.addFromUri('//Alice', {}, 'sr25519');
  const bob = keyring.addFromUri('//Bob', {}, 'sr25519');

  const tx = api.tx.utility.batchAll([
    api.tx.balances.transferKeepAlive('5HChDnRNd2xn7rGsbJNqJrV5NmpALVKTY9YC2Zzeyu5rjzqC', 1000 * 10 ** 12),
    api.tx.balances.transferKeepAlive('5GDCKqWHVg6NG9RQeKQjAQ7t9Pc94UZ3FsxRDCNyesUudi8Y', 100 * 10 ** 12),
  ]);

  await new Promise((resolve, reject) =>
    tx.signAndSend(alice, ({ events, status }) => {
      if (status.isInBlock) {
        const transferEvent = events.find(
          ({ event: { method, section } }) => section === 'system' && method === 'Transfer',
        );

        if (transferEvent) {
          const [from, to, amount] = transferEvent.event.data;
          console.log(`${from} transfered ${amount} to ${to}`);
        } else {
          console.log('No transfer event found');
        }
      } else if (status.isFinalized) {
        resolve('Finalized');
      }
    }),
  );
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
