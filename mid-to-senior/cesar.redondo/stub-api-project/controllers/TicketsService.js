'use strict';

exports.createTicket = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (Ticket)
  **/
    var examples = {};
  examples['application/json'] = {
  "data" : {
    "tickets" : [ {
      "seat" : "",
      "validationImage" : "aeiou",
      "validationCode" : "aeiou",
      "space" : {
        "imageMapUrl" : "aeiou",
        "createdAt" : "2000-01-23T04:56:07.000+00:00",
        "price" : 1.3579000000000001069366817318950779736042022705078125,
        "name" : "aeiou",
        "description" : "aeiou",
        "seats" : [ {
          "number" : "aeiou",
          "code" : "aeiou",
          "row" : "aeiou",
          "status" : {
            "name" : "aeiou",
            "description" : "aeiou"
          }
        } ],
        "totalSeats" : 1.3579000000000001069366817318950779736042022705078125,
        "updatedAt" : "2000-01-23T04:56:07.000+00:00"
      }
    } ],
    "totalCost" : 1.3579000000000001069366817318950779736042022705078125,
    "status" : {
      "name" : "aeiou",
      "description" : "aeiou"
    }
  }
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.deleteTicket = function(args, res, next) {
  /**
   * parameters expected in the args:
  * ticketId (Long)
  **/
    var examples = {};
  examples['application/json'] = {
  "data" : {
    "seat" : "",
    "validationImage" : "aeiou",
    "validationCode" : "aeiou",
    "space" : {
      "imageMapUrl" : "aeiou",
      "createdAt" : "2000-01-23T04:56:07.000+00:00",
      "price" : 1.3579000000000001069366817318950779736042022705078125,
      "name" : "aeiou",
      "description" : "aeiou",
      "seats" : [ {
        "number" : "aeiou",
        "code" : "aeiou",
        "row" : "aeiou",
        "status" : {
          "name" : "aeiou",
          "description" : "aeiou"
        }
      } ],
      "totalSeats" : 1.3579000000000001069366817318950779736042022705078125,
      "updatedAt" : "2000-01-23T04:56:07.000+00:00"
    }
  }
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getTicketById = function(args, res, next) {
  /**
   * parameters expected in the args:
  * ticketId (Long)
  **/
    var examples = {};
  examples['application/json'] = {
  "data" : {
    "seat" : "",
    "validationImage" : "aeiou",
    "validationCode" : "aeiou",
    "space" : {
      "imageMapUrl" : "aeiou",
      "createdAt" : "2000-01-23T04:56:07.000+00:00",
      "price" : 1.3579000000000001069366817318950779736042022705078125,
      "name" : "aeiou",
      "description" : "aeiou",
      "seats" : [ {
        "number" : "aeiou",
        "code" : "aeiou",
        "row" : "aeiou",
        "status" : {
          "name" : "aeiou",
          "description" : "aeiou"
        }
      } ],
      "totalSeats" : 1.3579000000000001069366817318950779736042022705078125,
      "updatedAt" : "2000-01-23T04:56:07.000+00:00"
    }
  }
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getTickets = function(args, res, next) {
  /**
   * parameters expected in the args:
  * skip (Long)
  * perPage (Long)
  **/
    var examples = {};
  examples['application/json'] = {
  "data" : [ {
    "seat" : "",
    "validationImage" : "aeiou",
    "validationCode" : "aeiou",
    "space" : {
      "imageMapUrl" : "aeiou",
      "createdAt" : "2000-01-23T04:56:07.000+00:00",
      "price" : 1.3579000000000001069366817318950779736042022705078125,
      "name" : "aeiou",
      "description" : "aeiou",
      "seats" : [ {
        "number" : "aeiou",
        "code" : "aeiou",
        "row" : "aeiou",
        "status" : {
          "name" : "aeiou",
          "description" : "aeiou"
        }
      } ],
      "totalSeats" : 1.3579000000000001069366817318950779736042022705078125,
      "updatedAt" : "2000-01-23T04:56:07.000+00:00"
    }
  } ],
  "meta" : {
    "per_page" : "",
    "total" : "",
    "count" : "",
    "link" : {
      "next" : "aeiou"
    },
    "total_pages" : "",
    "current_page" : ""
  }
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}
