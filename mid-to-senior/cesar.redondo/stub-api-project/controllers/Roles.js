'use strict';

var url = require('url');


var Roles = require('./RolesService');


module.exports.createRole = function createRole (req, res, next) {
  Roles.createRole(req.swagger.params, res, next);
};

module.exports.deleteRole = function deleteRole (req, res, next) {
  Roles.deleteRole(req.swagger.params, res, next);
};

module.exports.getRoleById = function getRoleById (req, res, next) {
  Roles.getRoleById(req.swagger.params, res, next);
};

module.exports.getRoles = function getRoles (req, res, next) {
  Roles.getRoles(req.swagger.params, res, next);
};

module.exports.updateRole = function updateRole (req, res, next) {
  Roles.updateRole(req.swagger.params, res, next);
};
