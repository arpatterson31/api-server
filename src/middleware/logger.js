'use strict';

module.exports = (res, req, next) => {
  console.log('Request data:', req.method, req.path);
  next();
}