'use strict';

const fs = require('fs');
const join = require('path').join;
const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');

const models = join(__dirname, 'app/models');
const port = process.env.PORT || 3000;
const app = express();

module.exports = app;

fs.readdirSync(models)
	.filter(file => ~file.search(/^[^\.].*\.js$/))
	.forEach(file => require(join(models, file)));

require('./config/express')(app);
require('./config/routes')(app);

connect()
    .on('error', console.log)
    .on('disconnected', connect)
    .once('open', listen);

function listen() {
    app.listen(port);
    console.log('Express app started on port ' + port);
}

function connect() {
    var options = { server: { socketOptions: { keepAlive: 1 } } };
    return mongoose.connect(config.db, options).connection;
}

