'use strict';

// Load Environment Variables from the .env file
require('dotenv').config();


// Application Dependencies
const express = require('express');
// const methodOverride = require('method-override');
const cors = require('cors');
const superagent = require('superagent');
const pg = require('pg');

//Our dependencies  <<-- put all of the const in here for our modules
const client = require('./util/db');




// Application Setup
const PORT = process.env.PORT;
const app = express();
app.use(cors());


app.use(express.static('./public'));
app.use(express.static(__dirname));


app.set('view engine', 'ejs');

//Route Definitions <<--put all of our app.gets in here for our handlers and modules.  Also the app.use for the error handlers
app.get('/bad', (request, response) => {
  throw new Error ('Ooops');
});

const registrationModule = require('./public/modules/registration'); //<<--works
const {registered, user, showRegistrationForm, addUser} = registrationModule;
app.get('/registration', showRegistrationForm)
app.post('/registration', addUser);

const workoutsHandler = require('./public/modules/workouts'); //<<--works
app.get('/workouts', workoutsHandler);


// const usersHandler = require('./public/modules/users'); //<<--doesn't work
// app.get('/users', usersHandler);

const errorModule = require('./public/modules/errors'); //<<--works
const {errorHandler, notFoundHandler} = errorModule;


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

// Has to happen after everything else
app.use(notFoundHandler);

// Has to happen after the error might have occurred.  Any further up and it would proccess before an error has a chance to occur.
app.use(errorHandler);


//Make sure the server is listening for requests - after the error handlers (above) and above the functions (below)
client.connect()  //<----need to use this with the const client et al above
  .then (() => {
    console.log('PG Connected!');
    app.listen(PORT, () => console.log(`App is listening on ${PORT}`));
  })
  .catch(err => {
    throw `PG error!: ${err.message}`;
  });
