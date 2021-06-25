const Koa = require('koa');
const KoaRouter = require('koa-router');

const server = new Koa();
const router = new KoaRouter();

server.use(router.routes());

server.listen(4000, () => {
    console.log('kleinBlog backend running on http://localhost:4000');
});