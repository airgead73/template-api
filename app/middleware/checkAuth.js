const asyncHandler = require('./handleAsync');
const { ISDEV } = require('../config/config');

const checkAuth = asyncHandler(async (req, res, next) => {

  if(ISDEV) {
    console.log('\n\n*****************\n');
    console.log('Auth checked.');
    console.log('\n*****************\n\n');
  }

  next();  

});

module.exports = checkAuth;
