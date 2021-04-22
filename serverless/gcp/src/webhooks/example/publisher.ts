import { Request, Response } from 'express';
// import { PubSubClient } from '../../client/pubsub';
import { Microservice } from '../../microservices/base';
import { HTTPMethod } from '../../global/types';

const handler = async (
  _: Request,
  response: Response
) => {
  // const pubsubClient = new PubSubClient();
  // await pubsubClient.publish({ topic: 'topic', data: {} });
  response.status(200).json({ message: 'Publisher Example' });
};

const { route } = Microservice;
export const { app: examplePublisher } = new Microservice(
  route({ path: '/', method: HTTPMethod.GET, handler })
);
