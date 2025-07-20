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

## Import/Export

## Request Object
- params
- query
- body
- file

## Logging

# MongoDB

- Non-Relational Database
- Data are stored in collections & documents
- Collection: Table
- Document: Rows
- Field: Column

## MongoDB Tools

1. Shell - Terminal
2. Compass - Local GUI
3. Atlas - Cloud

### MongoDB Shell commands

1. mongosh: init mongodb
2. show dbs: Show database list
3. use <dbname>: Use a database
4. cls: Clear screen
5. show collections: Show list of collections(table)

**Create**
1. insertOne
- db.<collectionName>.insertOne()
- for e.g; db.products.insertOne({name:"Iphone 14", price: 1800})

2. insertMany
- db.<collectionName>.insertMany()
- for e.g. db.products.insertMany([])

**Read**
1. find
- db.<collectionName>.find()
- db.products.find()
- db.products.find({category:"Monitors"})

2. findOne
- db.<collectionName>.findOne({})
- db.products.findOne({name: "Iphone 14"})

3. countDocuments
- db.products.countDocuments()

**Update**
1. updateOne
- db.<collectionName>.updateOne({find},{$set: {update value}} )
- db.products.updateOne({name: "Iphone 14"}, {$set: {name: "Iphone 14 pro max"}})

**Delete**
1. deleteOne
- db.<collectionName>.deleteOne({find})
- db.products.deleteOne({name: "Iphone 14 pro max"})

## Complex filter

1. $eq: Equality operator
- db.products.find({category: {$eq: "Monitors" }})

2. $ne: Not equal operator
- db.products.find({category: {$ne: "Monitors" }})

3. $gt/$gte: Greater than operator
- db.products.find({price: {$gt: 3000 }})

4. $lt/$lte: Less than operator
- db.products.find({price: {$lt: 3000 }})

5. $in
- db.products.find({price: {$in: [2000, 2500] }})

6. $and
- db.products.find({ $and: [ {price: 2000 } , {category:"Cosmetics"}]})

7. $or
- db.products.find({ $or: [ {price: 2000 } , {category:"Monitors"}]})

8. $not
- db.products.find({price: {$not: {$in: [2000, 2500]} }})

## Sorting
- db.products.find().sort({price: 1})
- 1: asc
- -1: desc

## Limit
- db.products.find().limit(2)

## Skip
- db.products.find().skip(3)

# Mongoose

- ODM of MongoDB for Node.js
- Schema validation
- Models
- Middleware
- Relationships

## Schema

- Structure/rule of a document/data

## Model

- Class built from schema, interact with the database
- Semantics: Always singular, pascal case
- For e.g. Product, ProductOrder
