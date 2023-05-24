const { getChainParams } = require('../dist/getChainParams.js');
const fs = require('fs');
const { Metadata, TypeRegistry } = require('@polkadot/types');

async function update(configPath, address) {
  const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));
  const params = await getChainParams(address);

  console.log(params);

  for (const [k, v] of Object.entries(params)) {
    config[k] = v;
  }

  const reg = new TypeRegistry();
  const meta = new Metadata(reg, params.metadataRpc);

  const existentialDepositHex = meta.asV14.pallets
    .find(({ name }) => name.eq('Balances'))
    .constants.find(({ name }) => name.eq('ExistentialDeposit')).value;

  const existentialDeposit = reg.createType('u128', existentialDepositHex).toString();
  config['existentialDeposit'] = existentialDeposit;

  fs.writeFileSync(configPath, JSON.stringify(config, undefined, 2) + '\n');
}

module.exports = { update };
