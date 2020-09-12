const Router = require('koa-router');
const books = require('./books');
const auth = require('./auth');
const api = new Router();


api.get('/user', (ctx, next) => {
    ctx.body = "GET" + ctx.request.path;
});

api.use('/auth', auth.routes());

module.exports = api;