'use strict';

const path = require('path');

module.exports = {
    secret : process.env.SESSION_SECRET,
    jwtSecretKey: process.env.JWT_SECRET,
    dbUrl: process.env.NODE_ENV,
    dialectOptions: {
      native: false,
      ssl: false
    },
};