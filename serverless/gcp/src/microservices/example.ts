import { HTTPMethod } from '../global/types';
import { Microservice } from './base';
import { Request, Response } from 'express';

const handler = async (_: Request, response: Response) => {
  response.status(200).json({ message: 'Example' });
};

const { route } = Microservice;
export const { app: test } = new Microservice(
  route({ path: '/', method: HTTPMethod.GET, handler })
);
