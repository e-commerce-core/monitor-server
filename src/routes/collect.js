const fs = require('fs');
const path = require('path');
const Router = require('koa-router');
const collectBiz = require('../bizs/collectBiz');

const router = new Router({
  prefix: '/collect'
});

const wmGif = fs.readFileSync(path.join(__dirname, '../assets/images/wm.gif'));

router.get('/wm.gif', async ctx => {
  collectBiz.processPagePerformance(ctx, 'get');
  ctx.type = 'image/gif';
  ctx.body = wmGif;
});

router.post('/', async ctx => {
  collectBiz.processPagePerformance(ctx);
  ctx.body = 'ok';
});

module.exports = router;
