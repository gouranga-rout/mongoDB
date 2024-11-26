# MongoDB Connection with Server (Atlas database)

## Description

This project is a Node.js server that connects to a MongoDB Atlas database using Mongoose. It serves as a foundation for building RESTful APIs or web applications.
But this time I have build separate files for database connection and server connection.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Technologies](#technologies)
- [Installation](#installation)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- [Node.js](https://nodejs.org/) installed on your machine.
- A MongoDB Atlas account and a connection string (URI).

## Technologies Used

- **Node.js**: A JavaScript runtime environment for server-side development.
- **Express**: A popular web application framework for Node.js.
- **MongoDB**: A NoSQL database used to store the data.
- **Mongoose**: An Object Document Mapping (ODM) library for MongoDB and Node.js, used to interact with the database.

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/gouranga-rout/mongoDB.git
   ```
2. Navigate to the project directory:
   ```
   cd mongoDB
   ```
3. Initialize Node modules:
   ```
   npm init -y
   ```
4. Install the dependencies:
   ```
   npm install dotenv express mongoose
   ```
5. Set up the MongoDB connection:
   - Create a MongoDB Atlas account (if you haven't already) and set up a new cluster.
   - Obtain the connection string for your MongoDB database.
   - Create a `.env` file in your root directory and add your database connection string :
   ```
   MONGO_URI=mongodb+srv://<username>:<password>@<cluster>/<database>?retryWrites=true&w=majority
   PORT=xxxx  
   ```
   
6. Start the server:
   ```
   node server.js
   ```
7. The server will be running on `http://localhost:****`.
   ```
   Server Runnin on port ****
   MongoDB Database Connected
   ```

