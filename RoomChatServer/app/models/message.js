'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
	sentAt: { type: Date, default: Date.now },
	body: { type: String, default: '', trim: true },
	user: { type: Schema.ObjectId, ref: 'User' },
	location: {
		longitude: { type: Number, default: 0 },
		latitude: { type: Number, default: 0 }
	},
	reactions: [{
		type: { type: Number, default: 1 },
		user: { type: Schema.ObjectId, ref: 'User' },
		reactedAt: { type: Date, default: Date.now }
	}],
	isAttachment: Boolean,
	image: String
});

mongoose.model('Message', MessageSchema);
