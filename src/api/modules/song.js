const { getFn } = require('../request');

exports.getLyric = function(queryParams) {
    return getFn(queryParams).then((res) => {
        const data = res.data;
        if(data.code == 0) {
            return {
                data: {
                    ...data,
                    lyric: new Buffer(data.lyric, 'base64').toString('utf8').split('\n'),
                }
            };
        } else {
            return {
                data: {
                    code: data.code,
                    message: '获取歌词数据出错',
                }
            };
        }
    });
};

exports.getSingerDetail = function(queryParams) {
    return getFn(queryParams);
};

exports.getVKey = function(queryParams) {
    return getFn(queryParams);
};