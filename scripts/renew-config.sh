TESTNET_CONFIG_PATH="./config/rosetta/vara-testnet.json"
MAINNET_CONFIG_PATH="./config/rosetta/vara-mainnet.json"

tag=$1
version=$2

testnet_meta_url="https://github.com/gear-tech/gear/releases/download/v"$tag"/testnet_vara_runtime_v"$version"_metadata.scale"
production_meta_url="https://github.com/gear-tech/gear/releases/download/v"$tag"/production_vara_runtime_v"$version"_metadata.scale"

echo "Downloading testnet metadata from $testnet_meta_url"
testnet_metadata=$(curl -L $testnet_meta_url)

echo "Downloading production metadata from $production_meta_url"
production_metadata=$(curl -L $production_meta_url)

echo "Updating testnet config"
echo "$testnet_metadata" | jq --argjson version "$version" \
    '.metadataRpc = input | .specVersion = $version' \
    "$TESTNET_CONFIG_PATH" > tmp.$$.json \
    && mv tmp.$$.json "$TESTNET_CONFIG_PATH"

echo "Updating mainnet config"
echo "$production_metadata" | jq --argjson version "$version" \
    '.metadataRpc = input | .specVersion = $version' \
    "$MAINNET_CONFIG_PATH" > tmp.$$.json \
    && mv tmp.$$.json "$MAINNET_CONFIG_PATH"
