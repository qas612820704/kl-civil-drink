import express from 'express';
import * as line from '@line/bot-sdk';
import handleEvent from './event-handler';
import { channelAccessToken, channelSecret } from './config';

const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'hello world' });
});

app.post('/',  line.middleware({
  channelAccessToken,
  channelSecret,
}), (req, res) => {
  console.log('req.body', JSON.stringify(req.body, null, 2, 2));

  Promise
  .all(req.body.events.map(handleEvent))
  .then((result) => res.json(result));
});

export default app;
