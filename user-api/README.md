## User microservice for Udagram
This microservice is designed to handle user-related requests 
and acts as a separate backend API with a separate database instance.

Base URL: `/users/auth/`

### Endpoints (relative to the base URL)

##### 1. Registration
```
POST /
DESCRIPTION:
    Serves as a registration endpoint. Takes user's credentials in the 
    body request and returns a JWT token and user's email.
REQUEST BODY:
    {
    	"email":"hello@gmail.com",
    	"password":"fancypass"
    }
RETURN BODY:   
    {
        "token": "<JWT_TOKEN>",
        "user": {
            "email": "hello@gmail.com"
        }
    }, 200
```

##### 2. Login
```
GET /login
DESCRIPTION:
    Serves as a login endpoint. Takes a user's credentials in the 
    body request and returns a JWT token, user's email and authentication boolean status.
REQUEST BODY:
    {
    	"email":"hello@gmail.com",
    	"password":"fancypass"
    }
RETURN BODY:
    {
        "auth": "true",
        "token": "<JWT_TOKEN>",
        "user": {
            "email": "hello@gmail.com"
        }
    }
```
