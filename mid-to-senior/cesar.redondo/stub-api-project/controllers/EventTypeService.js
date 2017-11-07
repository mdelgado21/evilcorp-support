'use strict';

exports.createEventType = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (EventType)
  **/
    var examples = {};
  examples['application/json'] = {
  "data" : {
    "name" : "aeiou",
    "description" : "aeiou"
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

exports.deleteEventType = function(args, res, next) {
  /**
   * parameters expected in the args:
  * eventTypeId (Long)
  **/
    var examples = {};
  examples['application/json'] = {
  "data" : {
    "name" : "aeiou",
    "description" : "aeiou"
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

exports.getEventType = function(args, res, next) {
  /**
   * parameters expected in the args:
  * skip (Long)
  * perPage (Long)
  * sort (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "data" : [ {
    "name" : "aeiou",
    "description" : "aeiou"
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

exports.updateEventType = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (EventType)
  **/
    var examples = {};
  examples['application/json'] = {
  "data" : {
    "name" : "aeiou",
    "description" : "aeiou"
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

