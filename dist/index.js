'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Merger = exports.Configuration = undefined;

require('babel-polyfill');

require('source-map-support/register');

var _configuration = require('./configuration');

var _merger = require('./merger');

exports.Configuration = _configuration.Configuration;
exports.Merger = _merger.Merger;