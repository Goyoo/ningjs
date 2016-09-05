'use strict';

var helper  = require('./helper');
var SDC     = require('statsd-client');
var statsd  = new SDC({
        host: '127.0.0.1',
        port: 8125,
    });

module.exports.middleware = function (req, res, next)
{
    // we don't want the middleware to affect the response time
    var startTime = new Date().getTime();

    // Function called on response finish that sends stats to statsd
    function sendStats()
    {
        // total requests count
        statsd.increment('total');

        // user agents stats
        var parsedUA = helper.parseUA(req.headers['user-agent']);
        statsd.increment('browser.' + parsedUA.family);
        statsd.increment('os.' + parsedUA.os.family);
        statsd.increment('pcmobile.' + helper.getPCOrMobileFromOS(parsedUA.os.family));

        // Path
        statsd.increment('path.slash-' + req.originalUrl.substr(1));
        
        // HTTP method
        statsd.increment('method.' + req.method);

        // Status Code
        var statusCode = res.statusCode || 'Unknown';
        statsd.increment('status_code.' + statusCode);

        // Response Time
        var duration = new Date().getTime() - startTime;
        statsd.timing('response_time', duration);

        cleanup();
    }

    // Function to clean up the listeners we've added
    function cleanup()
    {
        res.removeListener('finish', sendStats);
        res.removeListener('error', cleanup);
        res.removeListener('close', cleanup);
    }

    // Add response listeners
    res.once('finish', sendStats);
    res.once('error', cleanup);
    res.once('close', cleanup);

    if (next)
    {
        // we want to have some randomess
        setTimeout(next, 200 + Math.floor(Math.random() * 300));
    }
};
