const express = require('express');
const router = express.Router();

const checkResType = require('../middleware/checkResType');
const { validationRules, validate } = require('../middleware/handleValidation');
const auth_controller = require('../controllers/api.authController');

router.use(checkResType);

router
  .route('/signin')
  .post(
    validationRules('signinUser'),
    validate,
    auth_controller.signin
    );

router
  .route('/signout')
  .post(auth_controller.signout);

module.exports = router;