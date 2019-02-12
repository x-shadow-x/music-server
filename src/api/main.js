const recommend = require('./modules/recommend');
const singer = require('./modules/singer');
const song = require('./modules/song');

module.exports = {
    ...recommend,
    ...singer,
    ...song,
};