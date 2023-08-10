import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { randomUUID } from 'crypto';
import express, { Express } from 'express';
import { middleware } from 'express-openapi-validator';
import fs from 'fs';
import http from 'http';
import jsYaml from 'js-yaml';
import path from 'path';
import swaggerUI from 'swagger-ui-express';
import { Logger } from 'winston';
import config from './config';
import logger from './logger';

export default class ExpressServer {
  schema: any;
  app: Express;
  server: http.Server;
  logger: Logger

  constructor(private port: number, private openApiPath: string) {
    this.app = express();
    this.logger = logger

    try {
      this.schema = jsYaml.load(fs.readFileSync(openApiPath));
    } catch (e) {
      this.logger.error('Failed to start Express Server', { error: e });
    }
    
    this.setupMiddleware();
  }

  setupMiddleware() {
    // this.setupAllowedMedia();
    this.app.use(cors());
    this.app.use(bodyParser.json({ limit: '14MB' }));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(cookieParser());
    
    // Simple test to see that the server is up and responding
    this.app.get('/hello', (req, res) => res.send(`Hello World. path: ${this.openApiPath}`));
    
    // Send the openapi document *AS GENERATED BY THE GENERATOR*
    this.app.get('/openapi', (req, res) => res.sendFile(path.join(__dirname, 'api', 'openapi.yaml')));
    
    // View the openapi document in a visual interface. Should be able to test from this page
    this.app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(this.schema));
    
    this.app.get('/login-redirect', (req, res) => {
      res.status(200);
      res.json(req.query);
    });
    
    this.app.get('/oauth2-redirect.html', (req, res) => {
      res.status(200);
      res.json(req.query);
    });

    this.app.use((req, res, next) => {
      const rosettaTraceId: string = randomUUID();

      if (req.path !== "/_health") {
        this.logger.info('server.request', {
          request: {
            method: req.method,
            path: req.path
          },
          rosetta_trace_id: rosettaTraceId
        });
      }

      res.setHeader('x-rosetta-trace-id', rosettaTraceId);

      next();
    });
  }

  launch() {
    this.app.use(
      middleware({
        apiSpec: this.openApiPath,
        operationHandlers: config.ROOT_DIR,
        fileUploader: { dest: config.FILE_UPLOAD_PATH },
        validateRequests: true,
      }),
    );

    this.app.use((err, req, res, next) => {
      if (req.path !== "/_health") {
        this.logger.error(null, {
          request: {
            body: res.req.body,
            method: res.req.method,
            path: res.req.path
          },
          error: err
        });
      }
      
      res.status(err.status || 500).json({
        message: err.message || err,
        errors: err.errors || '',
      });
    });

    this.server = http.createServer(this.app).listen(this.port);
    this.logger.info(`Listening on port ${this.port}`);
  }

  async close() {
    if (this.server !== undefined) {
      await this.server.close();
      this.logger.info(`Server on port ${this.port} shut down)`);
    }
  }
}
