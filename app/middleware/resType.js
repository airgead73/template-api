const resType = function(req, res, next) {
  let resType;
  if((req.headers.accept).includes('json')) {
    resType = 'json';
  } else {
    resType = 'html';
  }

  res.locals.res_type = resType;

  console.log(res.locals.res_type);

  next();

};

module.exports = resType;