const Router = require('koa-router');

const router = new Router();


router.get('/sample', (ctx, next) => {
    console.log('get')
    ctx.body = 'Hello!!!!!';
});

module.exports = router;

