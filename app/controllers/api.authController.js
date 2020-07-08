const asyncHandler = require('../middleware/handleAsync');
const User = require('../models/User');

/**
 * @route   POST api/auth
 * @desc    Signin user
 * @access  public
 */

 exports.signin = asyncHandler(async function(req, res, next) {
   const { email, password } = req.body;

   if(res.locals.validation_fail && res.locals.res_html) {
    req.flash('error_msg', (res.locals.error_arr).join(' '));
    return res
     .status(400)
     .redirect('/signin');
   }

   res
    .status(res.locals.validation_fail ? 400 : 200)
    .json({
      success: res.locals.validation_fail ? false : true,
      msg: res.locals.validation_fail ? res.locals.error_arr : 'Signin user',
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