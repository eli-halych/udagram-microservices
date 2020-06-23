## Feed microservice for Udagram
This microservice is designed to handle user-related requests 
and acts as a separate backend API with a separate database instance.

Base URL: `/feed/`

### Endpoints (relative to the base URL)
```
GET /
DESCRIPTION:
    Serves as a getter for all available posts. 
RETURN BODY:   
    {
        "count": 3,
        "rows": [
            <A LIST OF 3 POSTS>
        ]
    }, 200
```
```
GET /:id
DESCRIPTION:
    Serves as a getter for a particular available posts. 
```
```
POST /
DESCRIPTION:
    Serves as a picture uploader. 
```
