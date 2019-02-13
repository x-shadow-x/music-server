const { getFn } = require('../request');

exports.search = function(queryParams) {
    return getFn(queryParams);
};
