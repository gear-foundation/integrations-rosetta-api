import fs from 'fs';
import path from 'path';
import { GearNetworkOptions } from '../types';
import config from '../config';

export const getNetworkOpts = (filename: string): GearNetworkOptions =>
  JSON.parse(fs.readFileSync(path.join(config.CONFIG_DIR, filename), 'utf-8'));
