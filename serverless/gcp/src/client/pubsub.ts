import { PubSub } from '@google-cloud/pubsub';

interface Message {
  topic: string;
  data: object;
}

export class PubSubClient {
  private service: PubSub = new PubSub();

  public async publish(message: Message) {
    const { topic, data } = message;
    await this.service.topic(topic).publishJSON(data);
  }
}
