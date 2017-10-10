'use strict';

var url = require('url');


var Tickets = require('./TicketsService');


module.exports.createTicket = function createTicket (req, res, next) {
  Tickets.createTicket(req.swagger.params, res, next);
};

module.exports.deleteTicket = function deleteTicket (req, res, next) {
  Tickets.deleteTicket(req.swagger.params, res, next);
};

module.exports.getTicketById = function getTicketById (req, res, next) {
  Tickets.getTicketById(req.swagger.params, res, next);
};

module.exports.getTickets = function getTickets (req, res, next) {
  Tickets.getTickets(req.swagger.params, res, next);
};
