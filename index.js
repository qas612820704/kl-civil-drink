import { fromExpress } from 'webtask-tools';
import app from './express';

module.exports = fromExpress(app);
