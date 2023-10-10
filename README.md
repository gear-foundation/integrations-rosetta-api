# Rosetta API for blockchains based on Gear Protocol
This is implementation of the [Rosetta API](https://www.rosetta-api.org/docs/welcome.html) for Gear-based blockchains, such as [Vara Network](https://vara-network.io/).

Rosetta API is a development tool created by Coinbase that makes it easier for blockchains to work with a range of third-party applications, exchanges like Coinbase, wallets, OTC desks and other services. As the integration kit by Coinbase, Rosetta API helps Gear-based blockchains integrate with Coinbase's existing platforms.

## Run Rosetta API server
#### Using Yarn
1. Install [Yarn](https://classic.yarnpkg.com/en/docs/install)

2. Install dependencies and build the project
    ```bash
    yarn install
    yarn build
    ```

3. Run server in different modes
   - Offline mode:
      `yarn start:offline`
   - Online mode:
     - Connected to development node:
        `yarn start:dev`
     - Connected to test network:
        `yarn start:test`
     - Connected to Vara network:
        `yarn start:vara`
    Also you can specify custom ws and http addresses to connect to network
    `yarn start:dev --ws wss://host:port --http http://host:port`

If you have need to specify different port of Rosetta API server you

#### Using Docker
1. Offline mode
    ```bash
    docker run -dt -p 8080:8080 ghcr.io/gear-tech/rosetta-api
    ```
2. Online mode on testnet
    ```bash
    docker run -dt -p 8080:8080 -v /tmp/gear:/data ghcr.io/gear-tech/rosetta-api:testnet
    ```
3. Online mode on vara
    ```bash
    docker run -dt -p 8080:8080 -v /tmp/gear:/data ghcr.io/gear-tech/rosetta-api:vara
    ```

***Server will be running on port 8080***

## Add new network
- Go to `server/networks`
- Create file `network-name.json`
- Use `development.json` file as a template

## Run tests
1. Install [rosetta-cli](https://github.com/coinbase/rosetta-cli) tool
2. [Run Gear node](https://wiki.gear-tech.io/docs/node/setting-up) in development mode with flag `--pruning archive`

### To test a Rosetta Construction API Implementation, follow these steps
1. Generate a Gear node spec file:
    ```bash
    ./gear build-spec --dev > dev.json
    ```
2. Add a prefunded account to spec file:
    *There is a nodejs script that can to do it automatically. (`test/set-prefunded-acc.js`)*
    ```bash
    node ./test/set-prefunded-acc.js path/to/generated/dev.json path/to/rosetta-cli/config.json
    ```
3. Run the Gear node using this command:
    ```bash
    gear --chain /path/to/dev.json --tmp --alice --pruning archive --rpc-methods Unsafe --rpc-cors all
    ```
4. Run Rosetta API server
5. Run tests:
    - `check:construction` - *This test will check the correctness of a Rosetta Construction API Implementation*
    ```bash
    /path/to/rosetta-cli --configuration-file ./test/vara-development/config.json check:construction
    ```
    - `check:data` - *This test will check the correctness of a Rosetta Data API Implementation*
    ```bash
    /path/to/rosetta-cli --configuration-file ./test/vara-development/config.json check:data
    ```
***See the documentation on using the rosetta-cli tool [here](https://www.rosetta-api.org/docs/rosetta_cli.html)***
