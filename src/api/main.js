const recommend = require('./modules/recommend');
const singer = require('./modules/singer');
const song = require('./modules/song');
const rank = require('./modules/rank');
const search = require('./modules/search');

module.exports = {
    ...recommend,
    ...singer,
    ...song,
    ...rank,
    ...search,
};