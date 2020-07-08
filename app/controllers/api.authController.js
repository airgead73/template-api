const asyncHandler = require('../middleware/async');
const User = require('../models/User');

/**
 * @route   POST api/auth
 * @desc    Signin user
 * @access  public
 */

 exports.signin = asyncHandler(async function(req, res, next) {
   const { email, password } = req.body;

   
 })