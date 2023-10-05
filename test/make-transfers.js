const { ApiPromise } = require('@polkadot/api');
const { Keyring } = require('@polkadot/keyring');

const main = async () => {
  const api = await ApiPromise.create();
  const keyring = new Keyring();
  const alice = keyring.addFromUri('//Alice', {}, 'sr25519');
  const bob = keyring.addFromUri('//Bob', {}, 'sr25519');

  await api.tx.balances
    .transferKeepAlive('5HChDnRNd2xn7rGsbJNqJrV5NmpALVKTY9YC2Zzeyu5rjzqC', 1000 * 10 ** 12)
    .signAndSend(alice);
  await api.tx.balances
    .transferKeepAlive('5GDCKqWHVg6NG9RQeKQjAQ7t9Pc94UZ3FsxRDCNyesUudi8Y', 100 * 10 ** 12)
    .signAndSend(bob);
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
