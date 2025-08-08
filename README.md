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

# Encryption & Decryption

- Encryption: Converting normal readable text into cipher (unreadable) text.
- for e.g: hello => asa8s90a8w90N&*BOIIuihb

- Decryption: Converting cipher text to readable form

## Types
1. Symmetric: Same key is used for encryption and decryption. for e.g AES
2. Asymmetric: Different keys are used for encryption and decryption. for Private key, public key, RSA algorithm

# Hashing

- Type of encryption, this is one way encryption.
- Register:  Test123456 => 3asdf4a86sdf16w84e1fas68df4asd8f6asdf4 (store)
- Login: Test123456 => asdf4a86sdf16w84e1fas68df4asd8f6asdf (compare)

# Salt

- Adding random texts in the hash value

# Auth

1. Login success
2. Token generated - JWT
3. Store token - Cookie storage, session storage, local storage
4. Append this token in every requests to handle auth

## JWT - JSON Web Token

- Used for auth
- Self verified
- Tamper-proof

### Structure

1. Header
2. Payload
3. Signature

## Cookie
- Can be stored in both server and browser
- Size: 4KB
- Expiry date can be set
- Available in all tabs

## Session storage
- Can be stored only in browser
- Size: 5MB
- Expires on tab close
- Available in one tab only

## Local storage
- Can be stored only in browser
- Size: 5MB - 10MB
- Never expires
- Available in all tabs

# Middleware
- Function that sits between request and response.

Browser ----- Request -----> Server
Middleware
Server ------ Response -----> Browser

- Function that has the accessibility of both request and response objects
- It has the functionality to go to next() function call

## Usage
- Logging
- Authentication & Authorization
- Error handling
- Modify request data

# Authentication & Authorization
- Authentication: Is user logged in/available?
- Authorization: Is user allowed to do something?

# RBAC - Role Based Access Control

- Single type role: Access Hierarchy
- Multiple roles: 
1. USER -> purchase
2. MERCHANT -> product mngt
3. ADMIN -> user mngt, order mngt

# Product order
1. User id
2. Product items
  a. product id
  b. quantity
3. status
4. orderNumber
5. totalPrice
6. shippingAddress

# File upload
1. Data/File input : Body -> FormData -> Multer
2. Temporary storage: /uploads -> Buffer (Binary data)
3. Storage bucket: Upload to Cloudinary -> filePath/url
4. Set the filepath/url: use this filepath/url to store in database

# Payment
1. Payment method use (for e.g pay via khalti)
2. Update payment status in our system

## Khalti
1. Payment initialize -> Generate url using the input data
2. Payment occurs in the khalti portal
3. Redirects to your return url after completion

# Reset password
1. User requests on Forgot password
2. Sends an email to that user, with a reset-password link and token
3. Also store this token in the db
4. Requests for reset password
5. Includes new password, confirm password with token
6. Update the password

# Semantics
- Code readability
- Code formatting
- File and folder structure
- File and folder naming
  - In Javascript use either camelCase or kebab-case
  - For js files use camelCase
  - For HTML, CSS files use kebab-case
  - Always use noun
- For variables use noun
- For functions/methods use verb
- Check for singular/plural
- Routes should be kebab-case with all lowercase texts
- Add lines above and below if/else, loop, function call

# Debugging
- Process of finding errors 
- Steps to debug
  1. Check the root app.js file
  2. Check the routes (check spelling, route orders)
  3. Check the controllers, check spelling, check params, arguments
  4. Check the service, check spelling, check params, arguments

# AI Integration
- Gemini

# Multi vendor system
Every merchant should be able to fetch:
  1. List of products created by them
  2. Orders made on their product

They should be able to update/delete their product.

# TypeScript

- JavaScript's superset with types OR type system included in JavaScript
- 

# Todos
- SMS
