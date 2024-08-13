# real-estate-calc-api
This project is the api project for real estate calculator for CS590. It uses Node.js, Sequelize, and PostgreSQL.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed Node.js and npm.
- You have a PostgreSQL database setup.
- You have installed the necessary dependencies with
  ```
  npm install
  ```

## Getting Started

### 1. Initialize the database
- Set your database in PostgreSQL and modify your settings in ./config/db.js 
- Initialize the database by runnning and you should have the tables inialized in your database
  ```
  node initDB.js
  ```
- If it does not work, set the tables manually using SQL in database.sql

### 2. Start the application
- Use to start the application
  ```
  npm start
  ```
  
### 3. Update API document
- Use apidoc to manage API document, you can see it in doc/assets/index.html
- Update with
  ```
  apidoc -i routes/ -o doc/
  ```
## Directory Structure
The project directory structure is as follows:
```
├── config
│   └── db.js
├── controllers
│   ├── userController.js
│   ├── propertyController.js
│   └── reportController.js
├── middlewares
│   └── authenticateToken.js
├── routes
│   ├── userRoutes.js
│   ├── propertyRoutes.js
│   └── reportRoutes.js
├── services
│   └── reportService.js
├── src
│   └── index.js
├── util
│   ├── calculations.js
├──  initDB.js
├──  database.sql
├── README.md
└── package.json
```
### Detailed Description
#### config/db.js
Configures and exports the database client instance for database operations.

#### controllers
**userController.js**: Manages user-related requests such as registration, login, and retrieving user information.<br>
**propertyController.js**: Handles requests related to property management such as adding, updating, and deleting properties.<br>
**reportController.js**: Manages requests for generating and retrieving various reports.

#### routes
**userRoutes.js**: Defines the routes for user-related endpoints.<br>
**propertyRoutes.js**: Defines the routes for property-related endpoints.<br>
**reportRoutes.js**: Defines the routes for report-related endpoints.

#### middlewares/authenticateToken.js
Middleware for token authentication, ensuring that only authenticated users can access certain routes.

#### services/reportService.js
Contains business logic for generating and processing reports.

#### src/index.js
The main entry point of the application, setting up the Express server and initializing routes and middleware.

#### util/calculations.js
Provides utility functions for performing various calculations used in the project.

#### initDB.js
Script for initializing the database, including creating tables and inserting initial data.

#### database.sql
Contains SQL scripts for setting up and populating the database schema.
