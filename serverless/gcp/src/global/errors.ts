import { NextFunction, Request, Response } from 'express';

export class HTTPError extends Error {
  statusCode: number;

  constructor(statusCode: number, message: string) {
    super(message);
    this.name = 'HTTPError';
    this.statusCode = statusCode;
  }
}

export class BadRequestError extends HTTPError {
  constructor(message: string) {
    super(400, message || 'Bad Request');
    this.name = 'BadRequestError';
  }
}

export class UnauthorizedError extends HTTPError {
  constructor(message: string) {
    super(401, message || 'Unauthorized');
    this.name = 'UnauthorizedError';
  }
}

export class NotFoundError extends HTTPError {
  constructor(message: string) {
    super(404, message || 'Not Found');
    this.name = 'NotFoundError';
  }
}

export class InternalServerError extends HTTPError {
  constructor(message: string) {
    super(404, message || 'Internal Server Error');
    this.name = 'InternalServerError';
  }
}

export const ErrorHandler = (
  error: HTTPError,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { message, statusCode } = error;
  error.statusCode = statusCode || 500;
  if (!response.headersSent) response.status(error.statusCode);
  response.json({ message, status: error.statusCode });
  next();
};

export const NotFoundHandler = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  if (!response.headersSent) {
    response.status(404);
    response.json({ message: 'Not Found', status: 404 });
  }
  next();
};
