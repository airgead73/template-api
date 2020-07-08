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
  .router('/current')  
  .post(auth_controller.current);

module.exports = router;