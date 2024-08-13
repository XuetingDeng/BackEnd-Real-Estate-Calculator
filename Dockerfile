# # Use the official Node.js image.
# FROM node:14

# # Create and change to the app directory.
# WORKDIR /usr/src/app

# # Copy application dependency manifests to the container image.
# COPY package*.json ./

# # Install dependencies.
# RUN npm install

# # Copy local code to the container image.
# COPY . .

# # Expose the port the app runs on
# EXPOSE 3000

# # Run the database initialization script
# COPY initDB.js .
# COPY database.sql .
# RUN node initDB.js

# # Run the web service on container startup.
# CMD [ "node", "src/index.js" ]

# Use the latest LTS version of Node.js as the base image
FROM node:18 as build

# Create and change to the app directory
WORKDIR /usr/src/app

# Copy application dependency manifests to the container image
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy local code to the container image
COPY . .

# Run the database initialization script
COPY initDB.js .
COPY database.sql .
RUN node initDB.js

# Use a smaller base image for production
FROM node:18-slim

# Create and change to the app directory
WORKDIR /usr/src/app

# Copy only the necessary files from the build stage
COPY --from=build /usr/src/app ./

# Expose the port the app runs on
EXPOSE 3000

# Run the web service on container startup
CMD [ "node", "src/index.js" ]

