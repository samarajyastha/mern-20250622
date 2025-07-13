# JavaScript

- Programming language
- High level, interpreted, multi-paradigm, dynamic, case-sensitive
- Built on C++
- Used to build frontend web pages (add interactivity)
- Node.js used to build APIs

# Node.js

- It is a JavaScript runtime.
- Runtime: It is program that runs another program.
- Helps to run JS in local machine, laptop, server.
- Build using C++
- Uses Google Chrome V8 engine for compiling
- Used to build APIs, microservices, server side programs, CLI, Webhooks

## Architecture
- Single threaded event driven architecture
- Non-blocking I/O Operations

## HTTP Methods

1. GET: Read, used for fetching data
2. POST: Create, used to add/create a new data
3. PUT: Update, used to updated existing data
4. DELETE: Delete, used to delete a data
5. PATCH (optional): Partial update

## HTTP Status codes

1. 100 range : Informational response
2. 200 range: Success response
    - 200: OK
    - 201: Created
3. 300 range: Redirection responses
4. 400 range: Client/User error responses
    - 400: Bad request
    - 401: Unauthorized
    - 403: Forbidden
    - 404: Not found
    - 405: Method not allowed
    - 409: Conflict
    - 422: Unprocessable entity
5. 500 range: Server error
    - 500: Internal server error
    - 502: Bad gateway
    - 504: Timeout

# Sematic coding

1. Files and folder structure
2. Files and folder naming
3. Function and variable naming

## API Folder structure
root/
- package.json
- .env
- .env.example
- .gitignore
- node_modules/
- src/
    - server.js
    - app.js
    - constants/
        - roles.js
    - controllers/
        - userControllers.js
    - helpers/
        - dataFormatter.js
    - lib/
        - userType.js
    - models/
        - User.js
    - routes/
        - userRoutes.js
    - services/
        - userServices.js
    - utils/
        - jwtAuth.js
