import { createLogger, format, transports } from 'winston';

export default createLogger({
  level: 'info',
  transports: [
    new transports.Console({
      format: format.combine(
        format.printf(({ level, message, ...meta }) => {
          let logEvent: Record<string, any> = {};

          if (!message) {
            if (!meta.error) {
              return JSON.stringify({
                message: 'Unexpected null log message with no error',
                metadata: meta,
                severity: 'ERROR',
              });
            }

            // NOTE: Do to the use of throwError being used to generate a Rosetta-format
            // response body for caught errors, any uncaught error that hits this flow will
            // have meta.error = {}. This is doable as the log message will just contain the
            // request data (method, path, body) and the status code, but ideally we can
            // capture any error properly in the logs, even if it isn't an "expected" error
            // code.
            const err: object = meta.error as object;
            delete meta.error;
            logEvent = { ...err, ...meta };
          } else if (typeof message === 'string') {
            if (meta.length !== 0) {
              logEvent = { message: message, ...meta };
            } else {
              logEvent = { message: message };
            }
          } else {
            logEvent = { ...(message as object), ...meta };
          }

          logEvent.severity = level.toUpperCase();
          return JSON.stringify(logEvent);
        }),
      ),
    }),
    new transports.File({ filename: 'error.log', level: 'error' }),
    new transports.File({ filename: 'combined.log' }),
  ],
});
