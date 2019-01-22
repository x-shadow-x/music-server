const { getFn } = require('../request');

exports.getSingers = function(queryParams) {
    return getFn(queryParams).then((res) => {
        const data = res.data;
        
        if(data.code == 0) {
            return {
                data: {
                    ...data.singerList
                }
            };
        } else {
            return {
                data: {
                    code: data.code,
                    message: '获取歌手数据出错'
                }
            };
        }
    });
};