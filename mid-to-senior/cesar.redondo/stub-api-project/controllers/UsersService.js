'use strict';

exports.addUser = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (User)
  **/
    var examples = {};
  examples['application/json'] = {
  "data" : {
    "createdAt" : "2000-01-23T04:56:07.000+00:00",
    "password" : "aeiou",
    "role" : {
      "name" : "aeiou",
      "description" : "aeiou"
    },
    "email" : "aeiou",
    "status" : {
      "name" : "aeiou",
      "description" : "aeiou"
    },
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

exports.deleteUser = function(args, res, next) {
  /**
   * parameters expected in the args:
  * userId (Long)
  **/
    var examples = {};
  examples['application/json'] = {
  "data" : {
    "createdAt" : "2000-01-23T04:56:07.000+00:00",
    "password" : "aeiou",
    "role" : {
      "name" : "aeiou",
      "description" : "aeiou"
    },
    "email" : "aeiou",
    "status" : {
      "name" : "aeiou",
      "description" : "aeiou"
    },
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

exports.getUserById = function(args, res, next) {
  /**
   * parameters expected in the args:
  * userId (Long)
  **/
    var examples = {};
  examples['application/json'] = {
  "data" : {
    "createdAt" : "2000-01-23T04:56:07.000+00:00",
    "password" : "aeiou",
    "role" : {
      "name" : "aeiou",
      "description" : "aeiou"
    },
    "email" : "aeiou",
    "status" : {
      "name" : "aeiou",
      "description" : "aeiou"
    },
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

exports.updateUser = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (User)
  **/
    var examples = {};
  examples['application/json'] = {
  "data" : {
    "createdAt" : "2000-01-23T04:56:07.000+00:00",
    "password" : "aeiou",
    "role" : {
      "name" : "aeiou",
      "description" : "aeiou"
    },
    "email" : "aeiou",
    "status" : {
      "name" : "aeiou",
      "description" : "aeiou"
    },
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

exports.usersGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * skip (Long)
  * status (String)
  * perPage (Long)
  * role (String)
  * sort (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "data" : [ {
    "createdAt" : "2000-01-23T04:56:07.000+00:00",
    "password" : "aeiou",
    "role" : {
      "name" : "aeiou",
      "description" : "aeiou"
    },
    "email" : "aeiou",
    "status" : {
      "name" : "aeiou",
      "description" : "aeiou"
    },
    "updatedAt" : "2000-01-23T04:56:07.000+00:00"
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

