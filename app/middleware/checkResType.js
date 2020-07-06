const { ISDEV } = require('../config/config');

exports.checkResType = function(req, res, next) {
  
  let resType;
  if((req.headers.accept).includes('json')) {
    resType = 'json';
  } else {
    resType = 'html';
  }

  res.locals.res_type = resType;

  if(ISDEV) {
    console.log('*****************');
    console.log(`res type: ${resType}`);
    console.log('*****************');
  }

  next();

};

