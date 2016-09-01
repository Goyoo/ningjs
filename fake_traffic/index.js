'use strict';

var request = require('request');
var helper = require('./helper');

function sendAFakeRequest()
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

    // we want to have some randomess
    setTimeout(sendAFakeRequest, 50 + Math.floor(Math.random() * 50));
}

sendAFakeRequest();
