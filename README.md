# MERN Stack E-commerce

## Init Project

1. Copy `.env.example` to `.env`
2. Update env variables with your own values

### Installation

```
npm install
```

### Run project

```
npm run dev
```

## Folder structure

root/
- package.json
- .env
- .env.example
- .gitignore
- node_modules/
- src/
  - app.js
  -
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

## JSON data

- JavaScript Object Notation
- Text based structured data
- Most common format used in APIs
- JSON to JS Object -> JSON.parse()
- JS Object to JSON -> JSON.stringify()

## REST API

- Representational State Transfer
    - JSON based data
    - HTTP Methods
- Application Program Interface

### Cases

1. Sentence case: Hello world
2. Camel case: helloWorld
3. Pascal case: HelloWorld
4. Kebab case: hello-world
5. Snake case: hello_world

## DRY technique: Don't repeat yourself

## Layered Architecture

1. Presentation layer (Frontend)
2. API layer
  - Route: URL Endpoint
  - Controller: Function that handles HTTP request, responses, status codes. Dumb function. No computation
3. Business logic layer
  - Service: Function that handles pure business logic, computation.
  - Service methods/functions can communicate with each other
4. Data access layer
  - Models & Repositories
  - Schemas
  - Sql
