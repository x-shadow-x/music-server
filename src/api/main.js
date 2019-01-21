const recommend = require('./modules/recommend');
const singer = require('./modules/singer');

module.exports = {
    ...recommend,
    ...singer,
};