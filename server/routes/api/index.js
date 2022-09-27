const router = require('express').Router();

const authRoutes = require('./auth.js');
router.use('/auth.js', authRoutes)

module.exports = router