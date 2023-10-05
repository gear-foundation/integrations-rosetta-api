const fs = require('fs');
const assert = require('assert');

const [path, configPath] = process.argv.slice(2);
assert.notStrictEqual(path, undefined, 'Path to gear spec file is not specified');
assert.notStrictEqual(configPath, undefined, 'Path to rosetta config file is not specified');

let spec = fs.readFileSync(path, 'utf-8');

const prefunded = ['5HChDnRNd2xn7rGsbJNqJrV5NmpALVKTY9YC2Zzeyu5rjzqC'];

const accounts = prefunded
  .map(
    ({ account_identifier: { address } }) =>
      `          [
            "${address}", 
            10000000000000000
          ]
`,
  )
  .join(',\n');

const balance = `,
${accounts}
        ]
      }`;

const match = spec.match(/"balances": \[[\w\W]+?\}/g)[0];
json = spec.replace(match, match.replace(/\s*\]\s*\}/g, balance));

fs.writeFileSync(path, json);
