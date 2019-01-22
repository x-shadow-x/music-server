const gaze = require('gaze');  
const exec = require('child_process').exec;
const env = process.argv[2] || 'dev';
const DEV = 'dev';

function Watch() {  
    gaze('./src/api/modules/*.js', function(err) {
        if(err) {
            throw new Error(err);
        }
        this.on('all', function(event, filepath) {
            console.info(filepath, ' was ', event);
            Geneartion();
        });
    });
}

function Geneartion() {
    const msg = exec('apidoc -i ./src/api/modules -o ./apidoc -e ./node_modules/');
    msg.stdout.on('data', function(data) {
        console.info('生成 Api->', data);
    });

    msg.stderr.on('data', function(data) {
        console.info('生成出错->', data);
    });
}

function RunDevServer() {
    const msg = exec('nodemon ./src/app.js');
    msg.stdout.on('data', function(data) {
        console.info('服务器启动->', data);
    });

    msg.stderr.on('data', function(data) {
        console.info('服务器启动出错->', data);
    });
}

function RunServer() {
    const msg = exec('node ./src/app.js');
    msg.stdout.on('data', function(data) {
        console.info('服务器启动->', data);
    });

    msg.stderr.on('data', function(data) {
        console.info('服务器启动出错->', data);
    });
}

env == DEV ? RunDevServer() : RunServer();
Geneartion();
Watch();
console.info('正在监听......');