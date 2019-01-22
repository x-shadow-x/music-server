const conf = require('./config/config-default');
const chalk = require('chalk');
const bodyParser = require('koa-bodyparser');
const cors = require('koa2-cors');
const Koa = require('koa');
const app = new Koa();
const main = require('./api/main');
app.use(bodyParser());
app.use(cors({
    origin: function (ctx) {
        if (ctx.url === '/test') {
            return '*'; // 允许来自所有域名请求
        }
        return '*';
    },
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'POST', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}));

app.use(async(ctx) => {
    const matches = ctx.url.match(/\/([^?]+)\??/);
    const fnName = matches[1];
    let params = {};
    let postData = {};
    if(ctx.method === 'GET') {
        params = ctx.request.query;
    }
    if(ctx.method === 'POST') {
        postData = ctx.request.body;
    }
    
    if(Object.prototype.toString.call(main[fnName]) == '[object Function]') {
        const response = await main[fnName](params, postData);
        ctx.body = response.data;
    }
});

app.listen(conf.port);
const url = `http://${conf.hostName}:${conf.port}`;
console.info(`server is running at ${chalk.green(url)}`);
