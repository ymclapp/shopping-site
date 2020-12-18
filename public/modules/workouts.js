'use strict'

const client = require('../../util/db');

const workoutsHandler = (request, response) => {  //<<--this works
    const SQL = 'SELECT * FROM Workouts';
    client.query(SQL)
    .then(results => {
      console.log(results);
      let { rowCount, rows } = results; //<<--this will assign variables out of results as if you did let rows = results.rows and let rowCount = results.rowCount
      
      if (rowCount === 0) {
        response.send ({
          error: true,
          message: 'Try harder'
        });
      } else {
        response.send({
          error: false,
          results: rows,
        })
          
        }
    })
    .catch(err => {  
        console.log(err);
        errorHandler(err. request, response);
    });
};

  module.exports(workoutsHandler);