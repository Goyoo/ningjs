'use strict';

var SDC     = require('statsd-client');
var statsd  = new SDC({
        host: 'localhost',
        port: 8125,
        tcp: true,
        socketTimeoutsToClose: 10,
        prefix: 'demo1',
    });

module.exports.middleware = function (req, res, next)
{
    // we don't want the middleware to affect the response time
    next();

    // simple total requests count
    statsd.increment('total');
};
