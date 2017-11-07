'use strict';

var url = require('url');


var Orders = require('./OrdersService');


module.exports.createOrder = function createOrder (req, res, next) {
  Orders.createOrder(req.swagger.params, res, next);
};

module.exports.deleteOrder = function deleteOrder (req, res, next) {
  Orders.deleteOrder(req.swagger.params, res, next);
};

module.exports.getOrderById = function getOrderById (req, res, next) {
  Orders.getOrderById(req.swagger.params, res, next);
};

module.exports.getOrders = function getOrders (req, res, next) {
  Orders.getOrders(req.swagger.params, res, next);
};
