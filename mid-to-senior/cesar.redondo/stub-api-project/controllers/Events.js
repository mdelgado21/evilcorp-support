'use strict';

var url = require('url');


var Events = require('./EventsService');


module.exports.createEvente = function createEvente (req, res, next) {
  Events.createEvente(req.swagger.params, res, next);
};

module.exports.deleteEvent = function deleteEvent (req, res, next) {
  Events.deleteEvent(req.swagger.params, res, next);
};

module.exports.getEventById = function getEventById (req, res, next) {
  Events.getEventById(req.swagger.params, res, next);
};

module.exports.getEvents = function getEvents (req, res, next) {
  Events.getEvents(req.swagger.params, res, next);
};

module.exports.publishEvent = function publishEvent (req, res, next) {
  Events.publishEvent(req.swagger.params, res, next);
};

module.exports.startSellingEvent = function startSellingEvent (req, res, next) {
  Events.startSellingEvent(req.swagger.params, res, next);
};

module.exports.stopSellingEvent = function stopSellingEvent (req, res, next) {
  Events.stopSellingEvent(req.swagger.params, res, next);
};

module.exports.unPublishEvent = function unPublishEvent (req, res, next) {
  Events.unPublishEvent(req.swagger.params, res, next);
};

module.exports.updateEvent = function updateEvent (req, res, next) {
  Events.updateEvent(req.swagger.params, res, next);
};
