const { userCreate, userLogin, userLogout } = require('./authControllers');

const router = require('express').Router();

router.route('/').post(userCreate);
router.route('/login').post(userLogin);
router.route('/logout').post(userLogout);

module.exports = router