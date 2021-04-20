import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import gzip from 'compression';
import helmet from 'helmet';
import { ErrorHandler, NotFoundHandler } from '../global/errors';

export class Microservice {
  app: express.Express;

  constructor(routes: express.Router) {
    dotenv.config();
    this.app = express();
    this.configure(routes);
  }

  private configure(routes: express.Router) {
    this.app.use(cors());
    this.app.use(gzip());
    this.app.use(helmet());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true, limit: 1024 }));
    this.app.use(routes);
    this.app.use(ErrorHandler);
    this.app.use(NotFoundHandler);
  }
}
