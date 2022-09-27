const router = require('express').Router();
const apiRoutes = require('./api');
const authRoutes = require('./auth.js');
const homeRoutes = require('./home-routes');

// Routes below:
router.use('/api', apiRoutes);
router.use('/', homeRoutes);






module.exports = router;