const { ApiPromise } = require('@polkadot/api');
const { Keyring } = require('@polkadot/keyring');

const main = async () => {
  const api = await ApiPromise.create({ noInitWarn: true });
  const keyring = new Keyring();
  const alice = keyring.addFromUri('//Alice', {}, 'sr25519');

  const tx = api.tx.utility.batchAll([
    api.tx.balances.transferKeepAlive('kGkfymFqB4aBVunXCW69EzQRDtkZkUQB44GB4XJnwNwqmWyRN', 1000 * 1e12),
    api.tx.balances.transferKeepAlive('kGjgUsJv5wDK645fjZ7B8qx42fNMjCPQdmzbHhwBG3vEpQhij', 100 * 1e12),
  ]);

  await new Promise((resolve, reject) =>
    tx.signAndSend(alice, ({ events, status }) => {
      if (status.isInBlock) {
        const transferEvents = events.filter(
          ({ event: { method, section } }) => section === 'balances' && method === 'Transfer',
        );

        if (transferEvents.length > 0) {
          transferEvents.forEach((transferEvent) => {
            const [from, to, amount] = transferEvent.event.data;
            console.log(`${from} transfered ${amount} to ${to}`);
          });
        } else {
          console.log('No transfer event found');
          process.exit(1);
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
