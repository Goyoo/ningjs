'use strict';

module.exports.getRandom = function ()
{
    return userAgents[Math.floor(Math.random() * userAgents.length)];
};

var userAgents = [

];