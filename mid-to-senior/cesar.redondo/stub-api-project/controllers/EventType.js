'use strict';

var url = require('url');


var EventType = require('./EventTypeService');


module.exports.createEventType = function createEventType (req, res, next) {
  EventType.createEventType(req.swagger.params, res, next);
};

module.exports.deleteEventType = function deleteEventType (req, res, next) {
  EventType.deleteEventType(req.swagger.params, res, next);
};

module.exports.getEventType = function getEventType (req, res, next) {
  EventType.getEventType(req.swagger.params, res, next);
};

module.exports.updateEventType = function updateEventType (req, res, next) {
  EventType.updateEventType(req.swagger.params, res, next);
};
