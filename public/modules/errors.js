'use strict'

const client = require('../../util/db');

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
  };

  module.exports = {
      errorHandler,
      notFoundHandler,
  };