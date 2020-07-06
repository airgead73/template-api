const { ISDEV } = require('../config/config');

exports.checkResType = function(req, res, next) {
  
  let resType;
  if((req.headers.accept).includes('json')) {
    res.locals.res_json = true;
  } else {
    res.locals.res_html = true;
  }

  if(ISDEV) {
    console.log('*****************');
    console.log(`res json: ${res.locals.res_json} res html: ${res.locals.res_html}`);
    console.log('*****************');
  }

  next();

};

