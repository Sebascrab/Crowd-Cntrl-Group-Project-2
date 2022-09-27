const router = require('express').Router();

const userRoutes = require('./user-routes');
const clientRoutes = require('./client-routes');


router.use('/users', userRoutes);
router.use('/clients', clientRoutes);



module.exports = router;