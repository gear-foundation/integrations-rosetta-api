const { ApiPromise } = require("@polkadot/api");
const { Keyring } = require("@polkadot/keyring");
const { u8aToHex } = require("@polkadot/util");
const {
  mnemonicGenerate,
  mnemonicToMiniSecret,
} = require("@polkadot/util-crypto");

const DUST_LOST_TEST_SEED =
  "0xb7ae643c4441d6451112d95bc2ad9ce35425eb16d07b335581d36584e1747977";

const main = async () => {
  const api = await ApiPromise.create({ noInitWarn: true });
  const keyring = new Keyring({ type: "sr25519", ss58Format: 137 });
  const alice = keyring.addFromUri("//Alice");

  const accountToCheckDustLost = keyring.addFromSeed(DUST_LOST_TEST_SEED);

  const tx = api.tx.utility.batchAll([
    api.tx.balances.transferKeepAlive(
      "kGkfymFqB4aBVunXCW69EzQRDtkZkUQB44GB4XJnwNwqmWyRN",
      1_000 * 1e12,
    ),
    api.tx.balances.transferKeepAlive(
      accountToCheckDustLost.address,
      10 * 1e12,
    ),
  ]);

  console.log(`Sending batch transaction...`);

  await new Promise((resolve, reject) =>
    tx.signAndSend(alice, ({ events, status }) => {
      if (status.isInBlock) {
        const transferEvents = events.filter(
          ({ event: { method, section } }) =>
            section === "balances" && method === "Transfer",
        );

        if (transferEvents.length > 0) {
          transferEvents.forEach((transferEvent) => {
            const [from, to, amount] = transferEvent.event.data;
            console.log(`${from} transfered ${amount} to ${to}`);
          });
        } else {
          console.log("No transfer event found");
          reject();
        }
      } else if (status.isFinalized) {
        console.log("Transaction finalized");
        resolve();
      }
    }),
  );

  const txWithDustLost = api.tx.balances.transferAllowDeath(
    alice.address,
    9.5 * 1e12,
  );

  console.log("Sending transaction to create DustLost event...");
  await new Promise((resolve, reject) =>
    txWithDustLost.signAndSend(accountToCheckDustLost, ({ events, status }) => {
      if (status.isInBlock) {
        const transferEvents = events.filter(
          ({ event: { method, section } }) =>
            section === "balances" && method === "Transfer",
        );

        if (transferEvents.length === 1) {
          transferEvents.forEach((transferEvent) => {
            const [from, to, amount] = transferEvent.event.data;
            console.log(`${from} transfered ${amount} to ${to}`);
          });
        } else {
          console.log("No transfer event found");
          reject();
        }

        const dustLostEvents = events.filter(
          ({ event: { method, section } }) =>
            section === "balances" && method === "DustLost",
        );

        if (dustLostEvents.length === 1) {
          dustLostEvents.forEach((dustLostEvent) => {
            const [account, amount] = dustLostEvent.event.data;
            console.log(`${account} lost ${amount} dust`);
          });
        } else {
          console.log("No dust lost event found");
          reject();
        }
      } else if (status.isFinalized) {
        console.log("Transaction finalized");
        resolve();
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
