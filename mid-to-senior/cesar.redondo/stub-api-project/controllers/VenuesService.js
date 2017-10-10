'use strict';

exports.createVenue = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (Venue)
  **/
    var examples = {};
  examples['application/json'] = {
  "data" : {
    "owner" : {
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
    },
    "parent" : "",
    "createdAt" : "2000-01-23T04:56:07.000+00:00",
    "address" : {
      "zipcode" : "aeiou",
      "country" : "aeiou",
      "address2" : "aeiou",
      "city" : "aeiou",
      "address1" : "aeiou",
      "state" : "aeiou"
    },
    "geoposition" : {
      "latitude" : "aeiou",
      "longitude" : "aeiou"
    },
    "name" : "aeiou",
    "spaces" : [ {
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
    } ],
    "description" : "aeiou",
    "distribution" : "aeiou",
    "capacity" : 1.3579000000000001069366817318950779736042022705078125,
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

exports.deleteVenue = function(args, res, next) {
  /**
   * parameters expected in the args:
  * venueId (Long)
  **/
    var examples = {};
  examples['application/json'] = {
  "data" : {
    "owner" : {
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
    },
    "parent" : "",
    "createdAt" : "2000-01-23T04:56:07.000+00:00",
    "address" : {
      "zipcode" : "aeiou",
      "country" : "aeiou",
      "address2" : "aeiou",
      "city" : "aeiou",
      "address1" : "aeiou",
      "state" : "aeiou"
    },
    "geoposition" : {
      "latitude" : "aeiou",
      "longitude" : "aeiou"
    },
    "name" : "aeiou",
    "spaces" : [ {
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
    } ],
    "description" : "aeiou",
    "distribution" : "aeiou",
    "capacity" : 1.3579000000000001069366817318950779736042022705078125,
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

exports.getEventTypeById = function(args, res, next) {
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

exports.getVenueById = function(args, res, next) {
  /**
   * parameters expected in the args:
  * venueId (Long)
  **/
    var examples = {};
  examples['application/json'] = {
  "data" : {
    "owner" : {
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
    },
    "parent" : "",
    "createdAt" : "2000-01-23T04:56:07.000+00:00",
    "address" : {
      "zipcode" : "aeiou",
      "country" : "aeiou",
      "address2" : "aeiou",
      "city" : "aeiou",
      "address1" : "aeiou",
      "state" : "aeiou"
    },
    "geoposition" : {
      "latitude" : "aeiou",
      "longitude" : "aeiou"
    },
    "name" : "aeiou",
    "spaces" : [ {
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
    } ],
    "description" : "aeiou",
    "distribution" : "aeiou",
    "capacity" : 1.3579000000000001069366817318950779736042022705078125,
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

exports.getVenues = function(args, res, next) {
  /**
   * parameters expected in the args:
  * skip (Long)
  * perPage (Long)
  * geoposition (String)
  * venueType (String)
  * owner (String)
  * sort (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "data" : [ {
    "owner" : {
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
    },
    "parent" : "",
    "createdAt" : "2000-01-23T04:56:07.000+00:00",
    "address" : {
      "zipcode" : "aeiou",
      "country" : "aeiou",
      "address2" : "aeiou",
      "city" : "aeiou",
      "address1" : "aeiou",
      "state" : "aeiou"
    },
    "geoposition" : {
      "latitude" : "aeiou",
      "longitude" : "aeiou"
    },
    "name" : "aeiou",
    "spaces" : [ {
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
    } ],
    "description" : "aeiou",
    "distribution" : "aeiou",
    "capacity" : 1.3579000000000001069366817318950779736042022705078125,
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

exports.updateVenue = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (Venue)
  **/
    var examples = {};
  examples['application/json'] = {
  "data" : {
    "owner" : {
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
    },
    "parent" : "",
    "createdAt" : "2000-01-23T04:56:07.000+00:00",
    "address" : {
      "zipcode" : "aeiou",
      "country" : "aeiou",
      "address2" : "aeiou",
      "city" : "aeiou",
      "address1" : "aeiou",
      "state" : "aeiou"
    },
    "geoposition" : {
      "latitude" : "aeiou",
      "longitude" : "aeiou"
    },
    "name" : "aeiou",
    "spaces" : [ {
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
    } ],
    "description" : "aeiou",
    "distribution" : "aeiou",
    "capacity" : 1.3579000000000001069366817318950779736042022705078125,
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

