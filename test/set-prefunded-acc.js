const fs = require('fs');
const assert = require('assert');

const [path, configPath] = process.argv.slice(2);
assert.notStrictEqual(path, undefined, 'Path to gear spec file is not specified');
assert.notStrictEqual(configPath, undefined, 'Path to rosetta config file is not specified');

let spec = fs.readFileSync(path, 'utf-8');
let config = fs.readFileSync(configPath, 'utf-8');
const accounts = JSON.parse(config).construction.prefunded_accounts.map(({ account_identifier: { address }}) => 
`          [
            "e344fd5e18d8ef2a08bb61d1e66bd2a6c0c1a5509c6317f373793d148b0b2534",
            1152921504606846976
          ]
`).join(',\n');

const balance = `,
${accounts}
        ]
      }`;

const match = spec.match(/"balances": \[[\w\W]+?\}/g)[0]
json = spec.replace(match, match.replace(/\s*\]\s*\}/g, balance))

fs.writeFileSync(path, json)
