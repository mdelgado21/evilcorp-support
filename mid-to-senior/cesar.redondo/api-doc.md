#RestFul API

##Introduction
This is the documentation explain all the endpoint in EdiTickets API

## Base URL
All endpoints will begin with the following format:
`/api/v1`

##Content Type
Each endpoint allows JSON as content type, please add the following header:

`content-type: application/json`

##Allowed HTTPs requests
```
PUT     : To create resource 
POST    : Update resource
GET     : Get a resource or list of resources
DELETE  : To delete resource
```

## Authentication
To get access to the protected resources OAuth 2.0 uses access tokens. An access token is a string representing the granted permissions.

###Format
`Authorization: Bearer <token>`

##Description Of Usual Server Responses
* 200 `OK` - the request was successful.
* 201 `Created` - the request was successful and a resource was created.	
* 400 `Bad Request` - the request could not be understood or was missing required parameters.
* 401 `Unauthorized` - authentication failed or user doesn't have permissions for requested operation.
* 403 `Forbidden` - access denied.
* 404 `Not Found` - resource was not found.

##Default Application Status
 * Event-Status: `CREATED`, `PUBLISHED`, `STARTED`, `FINISHED` and `DELETED`
 * Seat-Status: `BUSY`, `BLOCKED` and `FREE`
 * User-Status: `ACTIVE` and `DELETED`
 * Order-Status: `ACTIVE` and `DELETED`
 
##Roles and Permisions
Default Roles: `ADMIN`, `MANAGER` and `CUSTOMER`

###Admin
The Admin can manipulate all the operations in the system

###Manager
The manager can only create, edit and delete events

###Customer
The customer can only buy tickets and see events, in addition the customer can manage their profile


##API and SDK Documentation
[HTML Version](assets/index.html)



