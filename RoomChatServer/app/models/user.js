'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	deviceId: { type: String, default: Date.now },
	username: String,
	passwordHash: String,
	passwordSalt: String,
	points: { type: Number, default: 0 }
});

mongoose.model('User', UserSchema);
