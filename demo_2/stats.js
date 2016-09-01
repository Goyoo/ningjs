'use strict';

var SDC     = require('statsd-client');
var statsd  = new SDC({
        host: 'localhost',
        port: 8125,
    });

var useragent   = require('useragent');

module.exports.middleware = function (req, res, next)
{
    // we don't want the middleware to affect the response time
    next();

    // total requests count
    statsd.increment('total');

    // user agents stats
    var parsedUA = useragent.lookup(req.headers['user-agent']);

    statsd.increment('browser.' + sanitizeForES(parsedUA.family));
    statsd.increment('os.' + sanitizeForES(parsedUA.os.family));
};

function sanitizeForES(str)
{
    if (!str)
        return 'unknown';

    return str.replace(/ /g, '_').replace(/\./g, '_');
};