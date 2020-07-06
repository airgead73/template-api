const asyncHandler = require('./handleAsync');
const { ISDEV } = require('../config/config');

const checkAuth = asyncHandler(async (req, res, next) => {

  if(ISDEV) {
    console.log('*****************');
    console.log('Auth checked.');
    console.log('*****************');
  }

  next();  

});

module.exports = checkAuth;
