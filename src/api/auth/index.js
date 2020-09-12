const Router = require('koa-router');
const authCtrl = require('./auth.controller')
const auth = new Router();

auth.post('/register/local', authCtrl.localRegister);
auth.post('/login/local', authCtrl.localLogin);
auth.get('/exists/:key(email|username)/:value', authCtrl.exists);
auth.post('/logout', authCtrl.logout);
auth.get('/check', authCtrl.check);

module.exports = auth;