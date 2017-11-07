'use strict';

exports.createEvente = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (Event)
  **/
    var examples = {};
  examples['application/json'] = {
  "data" : {
    "spaceUrl" : "aeiou",
    "venue" : {
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
    },
    "updatedBy" : "",
    "endDate" : "2000-01-23T04:56:07.000+00:00",
    "socialmediaUrls" : [ {
      "image" : "aeiou",
      "name" : "aeiou",
      "url" : "aeiou"
    } ],
    "description" : "aeiou",
    "eventType" : {
      "name" : "aeiou",
      "description" : "aeiou"
    },
    "title" : "aeiou",
    "createdAt" : "2000-01-23T04:56:07.000+00:00",
    "SellingEndDate" : "2000-01-23T04:56:07.000+00:00",
    "maxTicketsPerOrder" : 1.3579000000000001069366817318950779736042022705078125,
    "posterUrl" : "aeiou",
    "createdBy" : "",
    "name" : "aeiou",
    "sellingStartDate" : "2000-01-23T04:56:07.000+00:00",
    "startDate" : "2000-01-23T04:56:07.000+00:00",
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

exports.deleteEvent = function(args, res, next) {
  /**
   * parameters expected in the args:
  * eventId (Long)
  **/
    var examples = {};
  examples['application/json'] = {
  "data" : {
    "spaceUrl" : "aeiou",
    "venue" : {
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
    },
    "updatedBy" : "",
    "endDate" : "2000-01-23T04:56:07.000+00:00",
    "socialmediaUrls" : [ {
      "image" : "aeiou",
      "name" : "aeiou",
      "url" : "aeiou"
    } ],
    "description" : "aeiou",
    "eventType" : {
      "name" : "aeiou",
      "description" : "aeiou"
    },
    "title" : "aeiou",
    "createdAt" : "2000-01-23T04:56:07.000+00:00",
    "SellingEndDate" : "2000-01-23T04:56:07.000+00:00",
    "maxTicketsPerOrder" : 1.3579000000000001069366817318950779736042022705078125,
    "posterUrl" : "aeiou",
    "createdBy" : "",
    "name" : "aeiou",
    "sellingStartDate" : "2000-01-23T04:56:07.000+00:00",
    "startDate" : "2000-01-23T04:56:07.000+00:00",
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

exports.getEventById = function(args, res, next) {
  /**
   * parameters expected in the args:
  * eventId (Long)
  **/
    var examples = {};
  examples['application/json'] = {
  "data" : {
    "spaceUrl" : "aeiou",
    "venue" : {
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
    },
    "updatedBy" : "",
    "endDate" : "2000-01-23T04:56:07.000+00:00",
    "socialmediaUrls" : [ {
      "image" : "aeiou",
      "name" : "aeiou",
      "url" : "aeiou"
    } ],
    "description" : "aeiou",
    "eventType" : {
      "name" : "aeiou",
      "description" : "aeiou"
    },
    "title" : "aeiou",
    "createdAt" : "2000-01-23T04:56:07.000+00:00",
    "SellingEndDate" : "2000-01-23T04:56:07.000+00:00",
    "maxTicketsPerOrder" : 1.3579000000000001069366817318950779736042022705078125,
    "posterUrl" : "aeiou",
    "createdBy" : "",
    "name" : "aeiou",
    "sellingStartDate" : "2000-01-23T04:56:07.000+00:00",
    "startDate" : "2000-01-23T04:56:07.000+00:00",
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

exports.getEvents = function(args, res, next) {
  /**
   * parameters expected in the args:
  * skip (Long)
  * status (String)
  * perPage (Long)
  * eventStart (String)
  * eventEnd (String)
  * sellingStart (String)
  * sellingEnd (String)
  * owner (String)
  * eventType (String)
  * sort (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "data" : [ {
    "spaceUrl" : "aeiou",
    "venue" : {
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
    },
    "updatedBy" : "",
    "endDate" : "2000-01-23T04:56:07.000+00:00",
    "socialmediaUrls" : [ {
      "image" : "aeiou",
      "name" : "aeiou",
      "url" : "aeiou"
    } ],
    "description" : "aeiou",
    "eventType" : {
      "name" : "aeiou",
      "description" : "aeiou"
    },
    "title" : "aeiou",
    "createdAt" : "2000-01-23T04:56:07.000+00:00",
    "SellingEndDate" : "2000-01-23T04:56:07.000+00:00",
    "maxTicketsPerOrder" : 1.3579000000000001069366817318950779736042022705078125,
    "posterUrl" : "aeiou",
    "createdBy" : "",
    "name" : "aeiou",
    "sellingStartDate" : "2000-01-23T04:56:07.000+00:00",
    "startDate" : "2000-01-23T04:56:07.000+00:00",
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

exports.publishEvent = function(args, res, next) {
  /**
   * parameters expected in the args:
  * eventId (Long)
  **/
    var examples = {};
  examples['application/json'] = {
  "data" : {
    "spaceUrl" : "aeiou",
    "venue" : {
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
    },
    "updatedBy" : "",
    "endDate" : "2000-01-23T04:56:07.000+00:00",
    "socialmediaUrls" : [ {
      "image" : "aeiou",
      "name" : "aeiou",
      "url" : "aeiou"
    } ],
    "description" : "aeiou",
    "eventType" : {
      "name" : "aeiou",
      "description" : "aeiou"
    },
    "title" : "aeiou",
    "createdAt" : "2000-01-23T04:56:07.000+00:00",
    "SellingEndDate" : "2000-01-23T04:56:07.000+00:00",
    "maxTicketsPerOrder" : 1.3579000000000001069366817318950779736042022705078125,
    "posterUrl" : "aeiou",
    "createdBy" : "",
    "name" : "aeiou",
    "sellingStartDate" : "2000-01-23T04:56:07.000+00:00",
    "startDate" : "2000-01-23T04:56:07.000+00:00",
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

exports.startSellingEvent = function(args, res, next) {
  /**
   * parameters expected in the args:
  * eventId (Long)
  **/
    var examples = {};
  examples['application/json'] = {
  "data" : {
    "spaceUrl" : "aeiou",
    "venue" : {
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
    },
    "updatedBy" : "",
    "endDate" : "2000-01-23T04:56:07.000+00:00",
    "socialmediaUrls" : [ {
      "image" : "aeiou",
      "name" : "aeiou",
      "url" : "aeiou"
    } ],
    "description" : "aeiou",
    "eventType" : {
      "name" : "aeiou",
      "description" : "aeiou"
    },
    "title" : "aeiou",
    "createdAt" : "2000-01-23T04:56:07.000+00:00",
    "SellingEndDate" : "2000-01-23T04:56:07.000+00:00",
    "maxTicketsPerOrder" : 1.3579000000000001069366817318950779736042022705078125,
    "posterUrl" : "aeiou",
    "createdBy" : "",
    "name" : "aeiou",
    "sellingStartDate" : "2000-01-23T04:56:07.000+00:00",
    "startDate" : "2000-01-23T04:56:07.000+00:00",
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

exports.stopSellingEvent = function(args, res, next) {
  /**
   * parameters expected in the args:
  * eventId (Long)
  **/
    var examples = {};
  examples['application/json'] = {
  "data" : {
    "spaceUrl" : "aeiou",
    "venue" : {
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
    },
    "updatedBy" : "",
    "endDate" : "2000-01-23T04:56:07.000+00:00",
    "socialmediaUrls" : [ {
      "image" : "aeiou",
      "name" : "aeiou",
      "url" : "aeiou"
    } ],
    "description" : "aeiou",
    "eventType" : {
      "name" : "aeiou",
      "description" : "aeiou"
    },
    "title" : "aeiou",
    "createdAt" : "2000-01-23T04:56:07.000+00:00",
    "SellingEndDate" : "2000-01-23T04:56:07.000+00:00",
    "maxTicketsPerOrder" : 1.3579000000000001069366817318950779736042022705078125,
    "posterUrl" : "aeiou",
    "createdBy" : "",
    "name" : "aeiou",
    "sellingStartDate" : "2000-01-23T04:56:07.000+00:00",
    "startDate" : "2000-01-23T04:56:07.000+00:00",
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

exports.unPublishEvent = function(args, res, next) {
  /**
   * parameters expected in the args:
  * eventId (Long)
  **/
    var examples = {};
  examples['application/json'] = {
  "data" : {
    "spaceUrl" : "aeiou",
    "venue" : {
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
    },
    "updatedBy" : "",
    "endDate" : "2000-01-23T04:56:07.000+00:00",
    "socialmediaUrls" : [ {
      "image" : "aeiou",
      "name" : "aeiou",
      "url" : "aeiou"
    } ],
    "description" : "aeiou",
    "eventType" : {
      "name" : "aeiou",
      "description" : "aeiou"
    },
    "title" : "aeiou",
    "createdAt" : "2000-01-23T04:56:07.000+00:00",
    "SellingEndDate" : "2000-01-23T04:56:07.000+00:00",
    "maxTicketsPerOrder" : 1.3579000000000001069366817318950779736042022705078125,
    "posterUrl" : "aeiou",
    "createdBy" : "",
    "name" : "aeiou",
    "sellingStartDate" : "2000-01-23T04:56:07.000+00:00",
    "startDate" : "2000-01-23T04:56:07.000+00:00",
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

exports.updateEvent = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (Event)
  **/
    var examples = {};
  examples['application/json'] = {
  "data" : {
    "spaceUrl" : "aeiou",
    "venue" : {
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
    },
    "updatedBy" : "",
    "endDate" : "2000-01-23T04:56:07.000+00:00",
    "socialmediaUrls" : [ {
      "image" : "aeiou",
      "name" : "aeiou",
      "url" : "aeiou"
    } ],
    "description" : "aeiou",
    "eventType" : {
      "name" : "aeiou",
      "description" : "aeiou"
    },
    "title" : "aeiou",
    "createdAt" : "2000-01-23T04:56:07.000+00:00",
    "SellingEndDate" : "2000-01-23T04:56:07.000+00:00",
    "maxTicketsPerOrder" : 1.3579000000000001069366817318950779736042022705078125,
    "posterUrl" : "aeiou",
    "createdBy" : "",
    "name" : "aeiou",
    "sellingStartDate" : "2000-01-23T04:56:07.000+00:00",
    "startDate" : "2000-01-23T04:56:07.000+00:00",
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

