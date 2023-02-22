import path from 'path';
import assert from 'assert';
import { program } from 'commander';

const opts = program
  .option('-m, --mode <string>')
  .option('-n, --config-name <string>')
  .option('--configs-dir <string>')
  .parse()
  .opts();

const mode = opts.mode || 'online';
const MODE = {
  isOnline: mode === 'online',
  isOffline: mode === 'offline',
};

if (MODE.isOnline) {
  assert.notStrictEqual(
    opts.configName,
    undefined,
    `Config name wasn't provided. Use --config-name flag to specify network configuration`,
  );
}

const CONFIG_NAME = opts.configName;

const ROOT_DIR = __dirname;
const URL_PORT = Number(process.env.PORT) || 8080;
const BASE_VERSION = '';
const URL_PATH = 'http://localhost';
const PROJECT_DIR = __dirname;

export default {
  ROOT_DIR,
  URL_PORT,
  URL_PATH,
  BASE_VERSION,
  PROJECT_DIR,
  CONTROLLER_DIRECTORY: path.join(__dirname, 'controllers'),
  OPENAPI_YAML: path.join(ROOT_DIR, '..', 'openapi.yaml'),
  FULL_PATH: `${URL_PATH}:${URL_PORT}/${BASE_VERSION}`,
  FILE_UPLOAD_PATH: path.join(PROJECT_DIR, 'uploaded_files'),
  ROSETTA_VERSION: '1.4.13',
  MODE,
  CONFIG_NAME,
  CONFIG_DIR: opts.configsDir ? path.resolve(process.cwd(), opts.configsDir) : '../config',
};
