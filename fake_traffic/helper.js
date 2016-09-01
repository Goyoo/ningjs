'use strict';

var userAgentHelper = require('./user_agent');

module.exports.getRandomUserAgent = userAgentHelper.getRandom;

var httpMethods = [
    'GET', 'GET', 'GET', 'GET', // give 'GET' a little more weight
    'POST',
];
module.exports.getRandomHTTPMethod = function ()
{
    return httpMethods[Math.floor(Math.random() * httpMethods.length)];
};

var uris = [
    '/', '/', '/', // give '/' a little more weight
    '/login',
    '/register',
    '/blog',
    '/user',
    '/non-existant-page', // to get some 404
];
module.exports.getRandomURI = function ()
{
    return uris[Math.floor(Math.random() * uris.length)];
};

var cookies = [];

// will generate 100 random cookies
(function ()
{
    var char = '0123456789abcdef';
    var i, j, temp;
    for (i = 0; i < 100; i++)
    {
        temp = '';
        for (j = 0; j < 32; j++)
            temp += char[Math.floor(Math.random() * char.length)];

        cookies.push(temp);
    }
})(); // direct call

module.exports.getRandomCookie = function ()
{
    return cookies[Math.floor(Math.random() * cookies.length)];
};