const express = require('express');
const router = express.Router();

const { check_auth } = require('../middleware/checkAuth');
const { check_restype } = require('../middleware/checkResType');
const users_controller = require('../controllers/api.usersController');

router.use(check_restype);
router.use(check_auth);

router  
  .route('/')
  .get(users_controller.read_many)
  .post(users_controller.create);

router
  .route('/current')
  .get(users_controller.read_current);

router
  .route('/:userID')
  .get(users_controller.read_single)
  .put(users_controller.update)
  .delete(users_controller.delete);

module.exports = router;