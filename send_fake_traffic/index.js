'use strict';

var request = require('request');
var helper = require('./helper');

setInterval(function ()
{
    request({
        baseUrl: 'http://localhost:3000/',
        uri: helper.getRandomURI(),
        method: helper.getRandomHTTPMethod(),
        headers: {
            'User-Agent': helper.getRandomUserAgent(),
            Cookie: helper.getRandomCookie(),
        },
        timeout: 1000, // ms
    }, function (error)
    {
        if (error)
            console.dir(error);
    });
}, 100); // ~10 times per second
