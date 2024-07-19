#!/bin/bash

TESTNET_CONFIG_PATH="./config/rosetta/vara-testnet.json"
MAINNET_CONFIG_PATH="./config/rosetta/vara-mainnet.json"

tag=$1
version=$2

testnet_meta_url="https://github.com/gear-tech/gear/releases/download/v"$tag"/testnet_vara_runtime_v"$version"_metadata.scale"
production_meta_url="https://github.com/gear-tech/gear/releases/download/v"$tag"/production_vara_runtime_v"$version"_metadata.scale"

echo "Downloading testnet metadata from $testnet_meta_url"
curl -L $testnet_meta_url -o testnet_metadata.scale
if [ $? -ne 0 ]; then
    echo "Failed to download testnet metadata"
    exit 1
fi

echo "Downloading production metadata from $production_meta_url"
curl -L $production_meta_url -o production_metadata.scale
if [ $? -ne 0 ]; then
    echo "Failed to download production metadata"
    exit 1
fi

echo "Updating testnet config"
jq --argfile metadata testnet_metadata.scale --argjson version "$version" \
    '.metadataRpc = $metadata | .specVersion = $version' \
    "$TESTNET_CONFIG_PATH" > tmp.$$.json \
    && mv tmp.$$.json "$TESTNET_CONFIG_PATH"

if [ $? -ne 0 ]; then
    echo "Failed to update testnet config"
    exit 1
fi

echo "Updating mainnet config"
jq --argfile metadata production_metadata.scale --argjson version "$version" \
    '.metadataRpc = $metadata | .specVersion = $version' \
    "$MAINNET_CONFIG_PATH" > tmp.$$.json \
    && mv tmp.$$.json "$MAINNET_CONFIG_PATH"

if [ $? -ne 0 ]; then
    echo "Failed to update mainnet config"
    exit 1
fi

echo "Configuration update completed successfully"
