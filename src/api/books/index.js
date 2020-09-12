const Router = require('koa-router');
const booksCtrl = require("./books.controller");

const books = new Router();


books.get('/get', booksCtrl.list);

books.get('/:id', booksCtrl.get);

books.post('/post', booksCtrl.create);

books.delete('/delete/:id', booksCtrl.delete);

books.put('/put/:id', booksCtrl.replace);

books.patch("/patch/:id", booksCtrl.update);

// books.get('/books', (ctx, next) => {
//     ctx.body = "GET" + ctx.request.path;
// });

module.exports = books;