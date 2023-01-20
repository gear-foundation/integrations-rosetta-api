import path from 'path';

const ROOT_DIR = __dirname;
const URL_PORT = 8080;
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
};
