'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const SessionSchema = new Schema({
	createdAt: { type: Date, default: Date.now, expires: 3600 },
	authToken: { type: String },
	deviceId: { type: String },
	username: { type: String },
});

mongoose.model('Session', SessionSchema);

exports.requiresLogin = function (req, res, next) {
	
	var token = req.cookies.authToken;
	if (req.cookies.
	if (req.isAuthenticated()) return next();
	if (req.method == 'GET') req.session.returnTo = req.originalUrl;
	res.status(401).send('Unauthorized. Please include proper authentication credentials and try again');
};

exports.authenticate = function (req, res) {
	if (req.cookies


	res.type('json');
};
