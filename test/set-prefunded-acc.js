const fs = require('fs');
const assert = require('assert');

const path = process.argv[2];
assert.notStrictEqual(path, undefined, 'Path to gear spec file is not specified');


const balance = `,
          [
            "5HChDnRNd2xn7rGsbJNqJrV5NmpALVKTY9YC2Zzeyu5rjzqC", 
            1152921504606846976
          ]
        ]
      }`

let spec = fs.readFileSync(path, 'utf-8')
const match = spec.match(/"balances": \[[\w\W]+?\}/g)[0]
json = spec.replace(match, match.replace(/\s*\]\s*\}/g, balance))

fs.writeFileSync(path, json)