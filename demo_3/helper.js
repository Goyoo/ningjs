'use strict';

var useragent   = require('useragent');

var pcOrMobileMap = {
    // mobile OS
    'Android': 'Mobile',
    'iOS': 'Mobile',
    // PC OS
    'Windows_XP': 'PC',
    'Windows_7': 'PC',
    'Windows_8': 'PC',
    'Windows_8_1': 'PC',
    'Windows_10': 'PC',
    'Mac_OS_X': 'PC',
    'Linux': 'PC',
};
module.exports.getPCOrMobileFromOS = function (os)
{
    if (pcOrMobileMap[os])
        return pcOrMobileMap[os];

    return 'Other';
};

module.exports.parseUA = function (ua)
{
    var parsedUA = useragent.lookup(ua);

    parsedUA.family = sanitizeForES(parsedUA.family);
    parsedUA.os.family = sanitizeForES(parsedUA.os.family);

    return parsedUA;
}

function sanitizeForES(str)
{
    if (!str)
        return 'unknown';

    return str.replace(/ /g, '_').replace(/\./g, '_');
};