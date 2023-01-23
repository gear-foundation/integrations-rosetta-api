# Rosetta API for blockchains based on Gear protocol
This is implementation of the [Rosetta API](https://www.rosetta-api.org/docs/welcome.html) for Gear-based blockchains.

## Run Rosetta API server
#### Using Yarn
1. Install [Yarn](https://classic.yarnpkg.com/en/docs/install)

2. Run the following commands
```bash
yarn install
yarn build
yarn start
```

#### Using Docker
1. Build image
```bash
docker build . -t rosetta
```
2. Run container
```bash
docker run --network="host" rosetta
```

***Server will be running on port 8080***

## Add new network
- Go to `server/networks`
- Create file `network-name.json`
- Use `development.json` file as a template

## Run tests
1. Install [rosetta-cli](https://github.com/coinbase/rosetta-cli) tool
2. [Run Gear node](https://wiki.gear-tech.io/docs/node/setting-up) in development mode with flag `--pruning archive`

*To test a Rosetta Construction API Implementation, follow these steps*
   1. Generate a Gear node spec file
   ```bash
   ./gear build-spec --dev > dev.json
   ```
   2. Add prefunded account to spec file
   *There is a nodejs script that can to do it automatically. (`test/set-prefunded-acc.js`)*
   ```bash
   node ./test/set-prefunded-acc.js path/to/generated/dev.json
   ```
   3. Run the Gear node using this command
   ```bash
   gear --chain /path/to/dev.json --tmp --alice --pruning archive --rpc-methods Unsafe --rpc-cors all
   ```
3. Run Rosetta API server
4. Run tests
- `check:construction` test
*This test will check the corretness of a Rosetta Construction API Implementation*
```bash
/path/to/rosetta-cli --configuration-file ./test/development/config.json check:construction
```
- `check:data` test
*This test will check the corretness of a Rosetta Data API Implementation*
```bash
/path/to/rosetta-cli --configuration-file ./test/development/config.json check:data
```
***See the documentaion on using the rosetta-cli tool [here](https://www.rosetta-api.org/docs/rosetta_cli.html)***