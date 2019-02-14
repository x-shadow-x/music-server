const { getFn } = require('../request');

exports.search = function(queryParams) {
    return getFn(queryParams);
};

exports.getHotKey = function(queryParams) {
    return getFn(queryParams);
};
