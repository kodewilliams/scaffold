import { PubSub } from '@google-cloud/pubsub';
import { PublisherMessage } from '.';
import { PubsubMessage } from '@google-cloud/pubsub/build/src/publisher';
import { InternalServerError } from '../global/errors';

export class PubSubClient {
  private service: PubSub = new PubSub();

  async publish(message: PublisherMessage) {
    const { topic, data } = message;
    await this.service.topic(topic).publishJSON(data);
  }

  parse(encoded: string) {
    return JSON.parse(Buffer.from(encoded, 'base64').toString());
  }

  read(message: PubsubMessage) {
    const { data } = message;
    const serialized = data ? this.parse(data as string) : false;

    if (!serialized)
      throw new InternalServerError('No readable data');
    return serialized;
  }
} 
