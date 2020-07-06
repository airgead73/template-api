const asyncHandler = require('./async');
const { ISDEV } = require('../config/config');

exports.checkAuth = asyncHandler(async (req, res, next) => {

  if(ISDEV) {
    console.log('*****************');
    console.log('Auth checked.');
    console.log('*****************');
  }

  next();  

});
