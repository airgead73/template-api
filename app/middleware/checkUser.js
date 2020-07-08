const asyncHandler = require('./handleAsync');
const User = require('../models/User');

exports.checkUser = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email }).selected('+password');
  console.log(email);
  console.log(password);
  console.log(user);

  // Check if user
  if(!user) {
    console.log('wrong email');
    res.locals.authorization_fail = true;
    res.locals.error_arr = ['Invalid credentials.'];
    return next();

  }  

  // Check password
  const isMatch = await user.matchPassword(password);

  if(!isMatch) {
    console.log('wrong password');
    res.locals.authorization_fail = true;
    res.locals.error_arr = ['Invalid credentials.'];
    return next();
  }   
  
  res.locals.checked_user = user;
  next();

});