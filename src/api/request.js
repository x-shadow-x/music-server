const axios = require('axios');

exports.getFn = function(queryParams) {
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
    return axios.get(url, {
        headers,
        params
    }).then(response => {
        return response;
    }).catch(err => {
        console.error(err);
        return err;
    });
};