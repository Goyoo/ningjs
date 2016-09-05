'use strict';

var SDC     = require('statsd-client');
var statsd  = new SDC({
        host: '127.0.0.1',
        port: 8125,
    });

module.exports.middleware = function (req, res, next)
{
    // we don't want the middleware to affect the response time
    next();

    // total requests count
    statsd.increment('total');
};
