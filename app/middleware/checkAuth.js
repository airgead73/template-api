const asyncHandler = require('./handleAsync');
const { ISDEV } = require('../config/config');

const checkAuth = asyncHandler(async (req, res, next) => {

  if(ISDEV) {
    console.log('\n*****************');
    console.log('Auth checked.');
    console.log('*****************\n');
  }

  next();  

});

module.exports = checkAuth;
