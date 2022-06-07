import Koa from 'koa';
import Router from 'koa-router';
import logger from 'koa-logger';
import json from 'koa-json';
import { routes } from './app/routes';
const websockify = require('koa-websocket');
const app = websockify(new Koa());

const router: Router = new Router();

app.use(json());
app.use(logger());

app.use(routes).use(router.allowedMethods());

app.listen(8080, () => {
  console.log('Koa started');
});
