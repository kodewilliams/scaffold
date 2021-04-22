import { PubsubMessage } from '@google-cloud/pubsub/build/src/publisher';
import { PubSubClient } from '../../client/pubsub';

export const exampleSubsriber = async (
  message: PubsubMessage
) => {
  const pubsubClient = new PubSubClient();
  const data = pubsubClient.read(message);
  console.log('Subscriber Example');
};