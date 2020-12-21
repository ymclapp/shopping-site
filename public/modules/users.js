'use strict'

const client = require('../../util/db');

const usersHandler = (request, response) => {  //<<--this DOES NOT work
    const SQL = 'SELECT * FROM Users';
    client.query(SQL)
    .then(results => {
      console.log(results);
      let { rowCount, rows } = results; //<<--this will assign variables out of results as if you did let rows = results.rows and let rowCount = results.rowCount
      
      if (rowCount === 0) {
        response.send ({
          error: true,
          message: 'You are unknown'
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

module.exports = usersHandler;