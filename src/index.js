require('dotenv').config();

const Koa = require('koa');
const app = new Koa();  

const Router = require('koa-router');
const router = new Router;
const crypto = require('crypto');
const { jwtMiddleware } = require('./api/lib/token');

const port = process.env.PORT || 4000;
const mongoose = require('mongoose');
const bodyParser = require("koa-bodyparser");

const api = require("./api");
const { date } = require('joi');


mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
.then((sre) => {
    console.log('데이터 베이스 연결 성공')
})
.catch(e => {
    console.error(e);
});

app.use(bodyParser()); // 바디파서 적용, 라우터 적용코드보다 상단에 있어야합니다
app.use(jwtMiddleware);
router.use('/api', api.routes());
app.use(router.routes()).use(router.allowedMethods());


app.listen(port, () => {
    console.log("home_server prot 4000");
});


// router.get("/", (ctx, next) => {
//     ctx.body = "홈";
// });

// router.get("/about", (ctx, next) => {
//     ctx.body = "소개";
// });

// router.get("/about/:name", (ctx, next) => {
//     const {name} = ctx.params;
//     ctx.body = name + "의 소개";
// });

// router.get("/num", (ctx, next) => {
//     const {id} = ctx.req uest.query;
//     if (id) {
//         ctx.body = "id = " + id;
//     } else{
//         ctx.body = "no";
//     }  
// });




// app.use(async(ctx, next) => {
//     console.log(1);
//     const stared = new Date();
//     await next();
//     console.log(new Date() - stared + "ns");
// });

// app.use((ctx) => {
//     ctx.body = "Hello Koa";
// });

