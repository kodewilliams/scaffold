require('express-async-errors');

import dotenv from 'dotenv';
import cors from 'cors';
import gzip from 'compression';
import helmet from 'helmet';
import morgan from 'morgan';
import express, { Router } from 'express';

import {
  ErrorHandler,
  NotFoundHandler,
  InternalServerError,
} from '../global/errors';
import { RouteConfig, HTTPMethod } from '../global/types';

export class Microservice {
  app: express.Express;

  constructor(routes: Router) {
    dotenv.config();
    this.app = express();
    this.configure(routes);
  }

  static route(config: RouteConfig) {
    const { method, path, handler } = config;
    switch (method) {
      case HTTPMethod.GET:
        return Router().get(path, handler);
      case HTTPMethod.POST:
        return Router().post(path, handler);
      case HTTPMethod.PUT:
        return Router().put(path, handler);
      case HTTPMethod.DELETE:
        return Router().delete(path, handler);
      default:
        throw new InternalServerError('Invalid route defined');
    }
  }

  private configure(routes: Router) {
    // Apply packaged middleware first
    this.app.use(cors());
    this.app.use(gzip());
    this.app.use(helmet());
    this.app.use(morgan('tiny'));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true, limit: 1024 }));

    // Custom modules after
    this.app.use(routes);
    this.app.use(ErrorHandler);
    this.app.use(NotFoundHandler);
  }
}
