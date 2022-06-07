import Router from 'koa-router';

const router = new Router();

router.get('/', async (ctx, next) => {
  ctx.body = { msg: 'Hello!' };
  await next();
});

router.get('/linkedList', async (ctx, next) => {
  const list = 123;
  ctx.status = 201;
  ctx.body = list;
  await next();
});

export const routes = router.routes();
