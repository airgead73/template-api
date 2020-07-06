const { ISDEV } = require('../config/config');

const handleError = function(err, req, res, next) {

  if(ISDEV) {
    console.log('****************************');
    console.error({
      name: err.name,
      status: err.status,
      msg: err.message
    });
    console.log('****************************');
  }

  switch(err.name) {
    case 'NotFoundError':
      return res
        .status(404)
        .json({
          status: err.status,
          msg: 'Page not found'
        });
      break;
    case 'ReferenceError':
      return res
        .status(500)
        .json({
          status: err.status,
          msg: 'Internal Server Error (reference)'
        });
      break; 
    case 'CastError': 
      return res
        .status(404) 
        .json({
          status: 404,
          msg: 'Resource not found'
        });
        break;
    default:
      return res
        .status(500) 
        .json({
          status: 500,
          msg: err.message
        })   
  }

}

module.exports = handleError;