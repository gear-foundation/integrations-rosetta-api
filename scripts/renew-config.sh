TESTNET_CONFIG_PATH="./config/rosetta/vara-testnet.json"
MAINNET_CONFIG_PATH="./config/rosetta/vara-mainnet.json"

tag=$1
version=$2

testnet_meta_url="https://github.com/gear-tech/gear/releases/download/v"$tag"/testnet_vara_runtime_v"$version"_metadata.scale"
production_meta_url="https://github.com/gear-tech/gear/releases/download/v"$tag"/production_vara_runtime_v"$version"_metadata.scale"


echo "Downloading testnet metadata from $testnet_meta_url"
testnet_metadata=`curl -L  $testnet_meta_url`

echo "Downloading production metadata from $production_meta_url"
production_metadata=`curl -L  $production_meta_url`

echo "Updating testnet config"
#jq --arg testnet_metadata "$testnet_metadata" --argjson version "$version" \
#    '.metadataRpc = $testnet_metadata | .specVersion = $version' \
#    "$TESTNET_CONFIG_PATH" > tmp.$$.json \
#    && mv tmp.$$.json "$TESTNET_CONFIG_PATH"

jq --slurpfile testnet_metadata /tmp/testnet_metadata.json --argjson version "$(cat /tmp/version.json)" \
    '.metadataRpc = $testnet_metadata | .specVersion = $version' \
    "$TESTNET_CONFIG_PATH" > tmp.$$.json \
    && mv tmp.$$.json "$TESTNET_CONFIG_PATH"

rm /tmp/testnet_metadata.json /tmp/version.json

echo "Updating mainnet config"
#jq --arg production_metadata "$production_metadata" --argjson version "$version" \
#    '.metadataRpc = $production_metadata | .specVersion = $version' \
#    "$MAINNET_CONFIG_PATH" > tmp.$$.json \
#    && mv tmp.$$.json "$MAINNET_CONFIG_PATH"

jq --slurpfile production_metadata /tmp/production_metadata.json --argjson version "$(cat /tmp/version.json)" \
    '.metadataRpc = $production_metadata | .specVersion = $version' \
    "$MAINNET_CONFIG_PATH" > tmp.$$.json \
    && mv tmp.$$.json "$MAINNET_CONFIG_PATH"

rm /tmp/production_metadata.json /tmp/version.json
