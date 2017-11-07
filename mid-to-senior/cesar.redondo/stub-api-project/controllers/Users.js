'use strict';

var url = require('url');


var Users = require('./UsersService');


module.exports.addUser = function addUser (req, res, next) {
  Users.addUser(req.swagger.params, res, next);
};

module.exports.deleteUser = function deleteUser (req, res, next) {
  Users.deleteUser(req.swagger.params, res, next);
};

module.exports.getUserById = function getUserById (req, res, next) {
  Users.getUserById(req.swagger.params, res, next);
};

module.exports.updateUser = function updateUser (req, res, next) {
  Users.updateUser(req.swagger.params, res, next);
};

module.exports.usersGET = function usersGET (req, res, next) {
  Users.usersGET(req.swagger.params, res, next);
};
