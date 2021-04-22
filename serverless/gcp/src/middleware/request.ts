import { Request, Response, NextFunction } from 'express';

export const prelog = (request: Request, _: Response, next: NextFunction) => {
  try {
    const { body, params, query } = request;
    console.log(`Body: ${body}`);
    console.log(`Query: ${query}`);
    console.log(`Params: ${params}`);
    next();
  } catch (error) {
    next(error);
  }
};
