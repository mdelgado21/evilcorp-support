'use strict';

exports.createRole = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (Role)
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

exports.deleteRole = function(args, res, next) {
  /**
   * parameters expected in the args:
  * roleId (Long)
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

exports.getRoleById = function(args, res, next) {
  /**
   * parameters expected in the args:
  * roleId (Long)
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

exports.getRoles = function(args, res, next) {
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

exports.updateRole = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (Role)
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

