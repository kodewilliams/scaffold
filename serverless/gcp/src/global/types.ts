import { RequestHandler } from 'express';

export enum HTTPMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export interface RouteConfig {
  path: string;
  method: HTTPMethod;
  handler: RequestHandler;
}

export interface PublisherConfig {
  name: string;
  publisher: Function;
}

export interface SubscriberConfig {
  name: string;
  subscriber: Function;
}

export interface WebhookConfig {
  topic: string;
  publishers: Array<PublisherConfig>;
  subscribers: Array<SubscriberConfig>;
}
