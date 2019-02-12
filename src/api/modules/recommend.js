const { getFn } = require('../request');

/**
 * @api {GET} https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?g_tk=741188905&uin=2509344578&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1548064602551 首页轮播
 * @apiVersion 0.0.1
 * @apiGroup recommend
 *
 * @apiParam {String} targetDomain 实际接口域名+对应的子目录
 * @apiParam {String} routeName 实际接口名
 * @apiParam {Object} other 实际接口所需的其他参数
 *
 * @apiSuccess {Number} code 返回码
 * @apiSuccess {Object} data  返回数据
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *          "code": 0,
 *          "data": {}
 *      }
 */
exports.getRecommend = function(queryParams) {
    return getFn(queryParams);
};

/**
 * @api {GET} http://10.1.1.99:8998/getDiscList?referer=https%253A%252F%252Fy.qq.com%252Fportal%252Fplaylist.html&origin=https%253A%252F%252Fy.qq.com&g_tk=5381&inCharset=utf-8&outCharset=utf-8&notice=0&format=json&targetDomain=https:%2F%2Fc.y.qq.com%2Fsplcloud%2Ffcgi-bin&routeName=fcg_get_diss_by_tag.fcg&picmid=1&rnd=0.1967613718866701&loginUin=0&hostUin=0&platform=yqq.json&needNewCode=0&categoryId=10000000&sortId=5&sin=0&ein=29 热门歌单
 * @apiVersion 0.0.1
 * @apiGroup recommend
 *
 * @apiParam {String} targetDomain 实际接口域名+对应的子目录
 * @apiParam {String} routeName 实际接口名
 * @apiParam {Object} other 实际接口所需的其他参数
 *
 * @apiSuccess {Number} code 返回码
 * @apiSuccess {Object} data  返回数据
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *          "code": 0,
 *          "data": {}
 *      }
 */
exports.getDissList = function(queryParams) {
    return getFn(queryParams);
};

exports.getDissDetail = function(queryParams) {
    return getFn(queryParams);
};