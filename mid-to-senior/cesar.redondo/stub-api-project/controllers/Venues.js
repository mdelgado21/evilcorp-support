'use strict';

var url = require('url');


var Venues = require('./VenuesService');


module.exports.createVenue = function createVenue (req, res, next) {
  Venues.createVenue(req.swagger.params, res, next);
};

module.exports.deleteVenue = function deleteVenue (req, res, next) {
  Venues.deleteVenue(req.swagger.params, res, next);
};

module.exports.getEventTypeById = function getEventTypeById (req, res, next) {
  Venues.getEventTypeById(req.swagger.params, res, next);
};

module.exports.getVenueById = function getVenueById (req, res, next) {
  Venues.getVenueById(req.swagger.params, res, next);
};

module.exports.getVenues = function getVenues (req, res, next) {
  Venues.getVenues(req.swagger.params, res, next);
};

module.exports.updateVenue = function updateVenue (req, res, next) {
  Venues.updateVenue(req.swagger.params, res, next);
};
