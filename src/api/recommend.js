const axios = require('axios');

exports.getRecommend = function(queryParams) {
    return _getFn(queryParams);
};

exports.getDiscList = function(queryParams) {
    console.info(queryParams);
    return _getFn(queryParams);
};

function _getFn(queryParams) {
    const params = {...queryParams};
    const targetDomain = decodeURIComponent(params.targetDomain);
    const headers = {
        referer: decodeURIComponent(params.referer),
        origin: decodeURIComponent(params.origin)
    };
    const routeName = params.routeName;
    const url = `${targetDomain}/${routeName}`;

    delete params.targetDomain;
    delete params.routeName;
    delete params.referer;
    delete params.origin;
    console.info(params);
    return axios.get(url, {
        headers,
        params
    }).then(response => {
        console.info(response.data);
        return response;
    }).catch(err => {
        console.error(err);
        return err;
    });
}