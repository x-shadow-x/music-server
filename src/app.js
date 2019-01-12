const conf = require('./config/config-default');
const chalk = require('chalk');
const Koa = require('koa');
const app = new Koa();

app.use( async(ctx) => {
    ctx.body = 'hello world';
});

app.listen(conf.port);
const url = `http://${conf.hostName}:${conf.port}`;
console.info(`server is running at ${chalk.green(url)}`);