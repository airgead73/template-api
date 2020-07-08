const asyncHandler = require('../middleware/handleAsync');
const User = require('../models/User');

/**
 * @route   POST api/auth
 * @desc    Signin user
 * @access  public
 */

 exports.signin = asyncHandler(async function(req, res, next) {
   const { email, password } = req.body;

   res
    .status(200)
    .json({
      success: true,
      msg: 'Signin user.',
      user: {
        email,
        password
      }
    });
   
 });

 exports.signout = asyncHandler(async function(req, res, next) {

  res
  .status(200)
  .json({
    success: true,
    msg: 'Signout user.'
  }); 

 });

 exports.read_current = asyncHandler(async function(req, res, next) {

  res
  .status(200)
  .json({
    success: true,
    msg: 'Read current user.'
  });

 });