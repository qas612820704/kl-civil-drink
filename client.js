import { Client } from '@line/bot-sdk';
import { channelAccessToken, channelSecret } from './config';

const client = new Client({
  channelAccessToken,
  channelSecret,
});

export default client;
