import { transports, createLogger, format } from 'winston';

export default createLogger({
  level: 'info',
  format: format.combine(format.timestamp({ format: 'YY-MM-DD HH::mm::ss' }), format.json()),
  defaultMeta: { service: 'rosetta' },
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.timestamp({ format: 'YY-MM-DD HH::mm::ss' }),
        format.json(),
        format.printf(({ level, message, timestamp }) => `${timestamp} [${level}]: ${message}`),
      ),
    }),
    new transports.File({ filename: 'error.log', level: 'error' }),
    new transports.File({ filename: 'combined.log' }),
  ],
});
