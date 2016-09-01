#!/usr/bin/env node

'use strict';

var express = require('express');
var logger = require('morgan');
var app = express();
    app.set('port', '3000');

// middlewares
    app.use(logger('dev'));

var statsHelper = require('./stats');
    app.use(statsHelper.middleware);

// routes
    app.all(
        [ '/','/login', '/register', '/blog', '/user' ],
        function (req, res, next)
        {
            res.end('<html><body><h1>Hello world!</h1></body></html>');
        }
    );

// starting the server
var server;
    server = app.listen(app.get('port'), function() {
        console.log('Express server listening on port ' + server.address().port);
    });
