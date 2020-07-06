const asyncHandler = require('../middleware/handleAsync');

/**
 * @route   POST /api/users
 * @desc    Create a user
 * @access  private
 */
exports.create = asyncHandler(async function(req, res, next) {
  
  res
    .status(200)
    .json({
      success: true,
      msg: 'Create user'
    });

});

/**
 * @route   GET /api/users
 * @desc    Read users
 * @access  private
 */
exports.read_many = asyncHandler(async function(req, res, next) {
  
  res
    .status(200)
    .json({
      success: true,
      msg: 'Read users'
    });

});

/**
 * @route   GET /api/users
 * @desc    Read users
 * @access  private
 */
exports.read_many = asyncHandler(async function(req, res, next) {
  
  res
    .status(200)
    .json({
      success: true,
      msg: 'Read users'
    });

});

/**
 * @route   GET /api/users/:userID
 * @desc    Read single user
 * @access  private
 */
exports.read_single = asyncHandler(async function(req, res, next) {
  
  res
    .status(200)
    .json({
      success: true,
      msg: 'Read '
    });

});

/**
 * @route   GET /api/users/current
 * @desc    Read current user
 * @access  private
 */
exports.read_current = asyncHandler(async function(req, res, next) {
  
  res
    .status(200)
    .json({
      success: true,
      msg: 'Read current user'
    });

});

/**
 * @route   PUT /api/users/:userID
 * @desc    Update user
 * @access  private
 */
exports.update = asyncHandler(async function(req, res, next) {

  res
    .status(200)
    .json({
      success: true,
      msg: 'Update user'
  }); 

});

/**
 * @route   DELETE /api/users/:userID
 * @desc    Update user
 * @access  private
 */
exports.delete = asyncHandler(async function(req, res, next) {

  res
    .status(200)
    .json({
      success: true,
      msg: 'Delete user'
  }); 

});