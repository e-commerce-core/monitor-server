const Router = require('koa-router');
const collectBiz = require('../bizs/collectBiz');

const router = new Router({
  prefix: '/collect'
});

router.get('/', async ctx => {
  // 处理数据
  console.log(ctx.request.body);
  ctx.body = 'ok';
});

router.post('/', async ctx => {
  // 处理数据
  console.log(ctx.request.body);
  ctx.body = 'ok';
});

module.exports = router;
