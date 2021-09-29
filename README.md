# library-backend
A graphql library backend implemented with node and apollo-server for the library-frontend.
 
 # Start the application locally,
 First create a .env file with the following content:

MONGODB_URI
JWT_SECRET=<YOUR-JWT-SECRET>     

All users have the same password, we focus here on GraphQL
 
 To start an application:

# Install dependancies
$ npm install

# Start the application
$ npm run dev

You can then access the GraphQL-playground on: http://localhost:4000/.

This is a very useful tool for a developer, and can be used to make queries to the server.
