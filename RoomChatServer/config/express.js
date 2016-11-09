'use strict';

const express = require('express');
const session = require('express-session');
const compression = require('compression');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');


const config = require('./');

const env = process.env.NODE_ENV || 'development';

module.exports = function (app) {

	app.use(compression({
		threshold: 512
	}));

	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(cookieParser(config.cookieSecret));

	if (env === 'development') {
		app.locals.pretty = true;
	}
};
