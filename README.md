# Complete Express.js Course Notes

This folder contains a step-by-step Express.js learning project. Each section introduces a new concept and builds your understanding of backend development with Node.js and Express.

## What You Have Learned So Far

### 1. Setup Express App
- Learned how to create a basic Express server.
- Used `express()` to initialize the app.
- Started the server with `app.listen()`.
- Created simple routes like `/` and `/about`.
- Understood the basic flow of handling requests and sending responses.

Folder: `01_setup_express_app`

### 2. Request and Response Basics
- Learned how requests and responses work in Express.
- Understood the role of `req` and `res`.
- Practiced sending simple text responses.
- Learned how to use middleware-style callback chaining in routes.

Folder: `02_req_res_detailed`

### 3. HTTP Methods
- Learned the common HTTP methods:
  - `GET` for reading data
  - `POST` for creating data
  - `PUT` for full update
  - `PATCH` for partial update
  - `DELETE` for deleting data
- Used `app.route()` to group related routes cleanly.
- Understood that Express allows us to define routes for different methods on the same endpoint.

Folder: `03_http_methods`

### 4. Advanced Routing
- Learned how to organize routes using separate route files.
- Used `express.Router()` to create modular route handlers.
- Connected route files to the main app using `app.use()`.
- Understood how to split application logic into smaller, maintainable parts.

Folder: `04_advance_router`

### 5. Route Parameters
- Learned how to capture dynamic values from the URL using route parameters.
- Example: `/product/:category/:model`
- Used `req.params` to access the values passed in the URL.
- Understood how route params are useful for dynamic endpoints such as product pages or user profiles.

Folder: `05_route_params`

### 6. Controllers in Depth
- Learned how to separate route logic from business logic.
- Created controller functions for handling requests.
- Moved logic into controller files to make code cleaner and reusable.
- Connected routes to controller functions for better structure.

Folders:
- `06_controllers_in_depth/controllers`
- `06_controllers_in_depth/routes`

### 7. Query Strings
- Learned how to read values from the URL query string.
- Used `req.query` to access data such as `?category=phone&model=13`.
- Understood that query parameters are useful for filtering and searching data.

Folder: `07_query_string`

### 8. Sending JSON Data
- Learned how to send JSON responses using `res.json()`.
- Understood the difference between plain text responses and JSON responses.
- Practiced returning arrays or objects from APIs.
- Recognized JSON as the standard format for modern APIs.

Folder: `08_sending_json_data`

### 9. Middleware
- Learned what middleware is and why it is important.
- Understood the middleware flow: request passes through middleware before reaching the route handler.
- Used a custom middleware function to validate HTTP methods.
- Learned about `next()` and how it moves the request to the next middleware or route handler.
- Understood that middleware can be used for logging, validation, authentication, and error handling.

Folders:
- `09_middleware/middlewares`
- `09_middleware/controllers`
- `09_middleware/routes`

### 10. Building a Simple CRUD App
- Learned how to build a mini CRUD API for products.
- Implemented Create, Read, Update, and Delete operations.
- Used Express routes for RESTful endpoints.
- Connected the app to MongoDB using Mongoose.
- Used environment variables with `dotenv`.
- Parsed incoming JSON with `express.json()`.
- Learned how to structure a larger Express app using:
  - routes
  - controllers
  - models
  - config files

Folder: `10_simple_crud_app`

## Core Concepts Covered

### Express Basics
- Creating an app
- Defining routes
- Handling requests and responses

### Routing
- Basic routes
- Route parameters
- Query strings
- Modular routers

### API Design
- RESTful endpoints
- JSON responses
- CRUD operations

### Application Structure
- Controllers for logic separation
- Routes for endpoint definitions
- Models for database schema
- Middleware for request handling

### Database Integration
- Connecting to MongoDB
- Creating schemas with Mongoose
- Performing CRUD operations using Mongoose models

## Important Skills You Now Have
- Build simple backend servers with Express
- Create REST APIs
- Organize code into routes and controllers
- Use middleware for request processing
- Connect a Node.js app to MongoDB
- Handle JSON data in APIs

## Next Steps
After this course section, you can move on to more advanced topics such as:
- Authentication and authorization
- Error handling in Express
- Validation with Joi or Zod
- File uploads
- JWT authentication
- Deployment to production

## How to Run the Projects
Each project folder can be run using Node.js. In most cases, use:

```bash
npm install
node server.js
```

If a project uses environment variables, make sure to create a `.env` file and add the required values.

## Summary
You have learned the foundation of Express.js and backend development. You now understand how to create routes, work with requests and responses, build APIs, use middleware, and connect your app to a database.
