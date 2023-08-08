import ExpressServer from './expressServer';
import logger from './logger';
import config from './config';
import { setNetworks } from './networks';

const launchServer = async () => {
  if (!config.MODE.isOnline && !config.MODE.isOffline) {
    throw new Error(`Mode should be set to 'online' or 'offline'`);
  }

  const networks = await setNetworks();
  if (networks.length === 0) {
    logger.error(`No networks have been set`);
    process.exit(1);
  }
  const expressServer = new ExpressServer(config.URL_PORT, config.OPENAPI_YAML);
  try {
    expressServer.launch();
    logger.info('Express server running');
  } catch (error) {
    logger.error('Express server failure', { error: error });
    await expressServer.close();
  }
};

launchServer().catch((e) => {
  logger.error(null, { error: e });
  process.exit(1);
});
