'use strict';

var url = require('url');


var Spaces = require('./SpacesService');


module.exports.createSpace = function createSpace (req, res, next) {
  Spaces.createSpace(req.swagger.params, res, next);
};

module.exports.deleteSpace = function deleteSpace (req, res, next) {
  Spaces.deleteSpace(req.swagger.params, res, next);
};

module.exports.getSpaceById = function getSpaceById (req, res, next) {
  Spaces.getSpaceById(req.swagger.params, res, next);
};

module.exports.getSpaces = function getSpaces (req, res, next) {
  Spaces.getSpaces(req.swagger.params, res, next);
};

module.exports.updateSpace = function updateSpace (req, res, next) {
  Spaces.updateSpace(req.swagger.params, res, next);
};
