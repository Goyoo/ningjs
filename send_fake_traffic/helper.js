'use strict';

var userAgentHelper = require('./user_agent');

module.exports.getRandomUserAgent = userAgentHelper.getRandom();

// give 'GET' a little more weight
var httpMethods = [ 'GET', 'GET', 'GET', 'GET', 'POST' ];
module.exports.getRandomHTTPMethod = function ()
{
    return httpMethods[Math.floor(Math.random() * httpMethods.length)];
};

// give '/' a little more weight
var uris = [ '/', '/', '/', '/login', '/register', '/blog', 'user' ];
module.exports.getRandomHTTPMethod = function ()
{
    return uris[Math.floor(Math.random() * uris.length)];
};

