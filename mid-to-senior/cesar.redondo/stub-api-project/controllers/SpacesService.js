'use strict';

exports.createSpace = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (Space)
  **/
    var examples = {};
  examples['application/json'] = {
  "data" : {
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
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.deleteSpace = function(args, res, next) {
  /**
   * parameters expected in the args:
  * spaceId (Long)
  **/
    var examples = {};
  examples['application/json'] = {
  "data" : {
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
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getSpaceById = function(args, res, next) {
  /**
   * parameters expected in the args:
  * spaceId (Long)
  **/
    var examples = {};
  examples['application/json'] = {
  "data" : {
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
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getSpaces = function(args, res, next) {
  /**
   * parameters expected in the args:
  * skip (Long)
  * perPage (Long)
  * minPrice (Integer)
  * maxPrice (Integer)
  * sort (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "data" : [ {
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
  } ]
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.updateSpace = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (Space)
  **/
    var examples = {};
  examples['application/json'] = {
  "data" : {
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
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

