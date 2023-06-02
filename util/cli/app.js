const assert = require('assert');
const { getChainParams } = require('../dist/getChainParams.js');
const fs = require('fs');
const path = require('path');
const { program } = require('commander');
const { update } = require('./update.js');

program
  .command('update <config>')
  .option('-a, --address <string>')
  .action((config, { address }) =>
    update(path.resolve(process.cwd(), config), address)
      .then(() => process.exit(0))
      .catch((err) => {
        console.error(err);
        process.exit(1);
      }),
  );

program.parse();
