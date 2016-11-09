'use strict';

module.exports = {
	db: process.env.ROOMCHAT_MONGO_URL || 'mongodb://localhost/roomchat',
	cookieSecret: process.env.ROOMCHAT_SESSION_SECRET
};
