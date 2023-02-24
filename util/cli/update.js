const { getChainParams } = require('../dist/getChainParams.js');
const fs = require('fs');

async function update(configPath, address) {
  const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));
  const params = await getChainParams(address);

  console.log(params);

  for (const [k, v] of Object.entries(params)) {
    config[k] = v;
  }

  fs.writeFileSync(configPath, JSON.stringify(config, undefined, 2));
}

module.exports = { update };
