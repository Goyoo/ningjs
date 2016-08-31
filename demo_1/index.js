#!/usr/bin/env node

'use strict';

var express = require('express');
var logger = require('morgan');
var app = express();
    app.set('port', '3000');

// middlewares
    app.use(logger('common'));

// routes
var statsController = require('./stats');
    app.get('/', statsController.index);

// starting the server
var server;
    server = app.listen(app.get('port'), function() {
        console.log('Express server listening on port ' + server.address().port);
    });
