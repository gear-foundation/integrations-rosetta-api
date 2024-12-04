const assert = require('assert');
const fs = require('fs');

const TESTNET_CONFIG_PATH = './config/rosetta/vara-testnet.json';
const MAINNET_CONFIG_PATH = './config/rosetta/vara-mainnet.json';

let tag = process.argv[2];

if (!tag.startsWith('v')) {
  tag = `v${tag}`;
}

assert.strictEqual(tag.match(/^v\d+\.\d+\.\d+$/), tag);

const version = tag.slice(1).replaceAll('.', '') + '0';

assert.strictEqual(version.length, 4);

const testnet_meta_url = `https://github.com/gear-tech/gear/releases/download/${tag}/testnet_vara_runtime_v${version}_metadata.scale`;

const production_meta_url = `https://github.com/gear-tech/gear/releases/download/${tag}/production_vara_runtime_v${version}_metadata.scale`;

const main = async () => {
  console.log('Downloading testnet metadata from', testnet_meta_url);
  const testnetMetadata = await fetch(testnet_meta_url).then((res) =>
    res.status === 404 ? Promise.reject('Testnet metadata not found') : res.text(),
  );

  console.log('Downloading production metadata from', production_meta_url);
  const productionMetadata = await fetch(production_meta_url).then((res) =>
    res.status === 404 ? Promise.reject('Mainnet metadata not found') : res.text(),
  );

  console.log('Updating testnet config');
  const testnetConfig = JSON.parse(fs.readFileSync(TESTNET_CONFIG_PATH));
  testnetConfig.metadataRpc = testnetMetadata;
  testnetConfig.specVersion = version;
  fs.writeFileSync(TESTNET_CONFIG_PATH, JSON.stringify(testnetConfig, null, 2));

  console.log('Updating mainnet config');
  const productionConfig = JSON.parse(fs.readFileSync(MAINNET_CONFIG_PATH));
  productionConfig.metadataRpc = productionMetadata;
  productionConfig.specVersion = version;
  fs.writeFileSync(MAINNET_CONFIG_PATH, JSON.stringify(productionConfig, null, 2));
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
