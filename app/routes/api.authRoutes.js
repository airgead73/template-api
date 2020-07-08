const express = require('express');
const router = express.Router();

const checkResType = require('../middleware/checkResType');
const { validationRules, validate } = require('../middleware/handleValidation');
const auth_controller = require('../controllers/api.authController');

router
  .route('/signin')
  .post(auth_controller.signin);

router
  .route('/signout')
  .post(auth_controller.signout);

router
  .route('/current')  
  .post(auth_controller.read_current);

module.exports = router;