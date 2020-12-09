'use strict';

// Load Environment Variables from the .env file
require('dotenv').config();


// Application Dependencies
const express = require('express');
const cors = require('cors');
const superagent = require('superagent');
const pg = require('pg');

// Application Setup
const PORT = process.env.PORT;
const app = express();

// Databae connection setup
const client = new pg.Client(process.env.DATABASE_URL);
client.on('error', err => {throw err; });

// Middleware - to get APIs to work with other webpages
app.use(cors());


// Need the below for each page of the site
app.get('/', (request, response) => {
  response.send('Home Page!');
});

app.get('/bad', (request, response) => {
  throw new Error ('Ooops');
});

// Instead of the inline info like above, you can send it to a handler
// Ex. app.get('/location', locationHandler);  <----goes here in the app.get area
// function locationHandler(request, response) {  <----goes in the route handler area - this is a route
    // const geoData = require('./data/geo.json'); <---node can bring in json files
    // const city = request.query.city;  <----grabs the city out of the query string that the user entered
    // const location = new Location ('city', geoData);
    // response.send(location); 
// }
// function Location(city, geoData) {  <---constructor function
    // this.search_query = city;
    // this.formatted_query = geoData[0].display_name;
    // this.latitude = geoData[0].lat;
    // this.longitude = geoData[0].lon);
// }

// app.use(express.static('./public'));

// Has to happen after everything else
app.use(notFoundHandler);

// Has to happen after the error might have occurred.  Any further up and it would proccess before an error has a chance to occur.
app.use(errorHandler);

app.get('/users', (request, response) => {
  const SQL = 'SELECT * FROM users';
  client.query(SQL)
    .then(results => {
      console.log(results);

      response.json(results);
    })
    .catch(err => {  //<---always include a .catch with promises or you won't know there is an error; it will just timeout.
      console.log(err);
      errorHandler(err. request, response);
    });
})



//Make sure the server is listening for requests
client.connect()  //<----need to use this with the const client et al above
  .then (() => {
    console.log('PG Connected!');
    app.listen(PORT, () => console.log(`App is listening on ${PORT}`));
  })
  .catch(err => {
    throw `PG error!: ${err.message}`;
  });

  // Helper functions/routes
    // add error handler
    function errorHandler (error, request, response, next) {
      response.status(500).json({
        error: true,
        message: error.message,
      });
    }

    function notFoundHandler (request, response) {
      response.status(404).json({
        notFound: true,
      });
    }