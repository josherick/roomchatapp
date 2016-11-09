'use strict';

const path = require('path');
const extend = require('util')._extend;

const development = require('./env/development');
const production = require('./env/production');

const defaults = { };

module.exports = {
  development: extend(development, defaults),
  production: extend(production, defaults)
}[process.env.NODE_ENV || 'development'];
