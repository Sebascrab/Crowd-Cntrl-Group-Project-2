// to call express
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const apiRoutes = require('./api')
const authRoutes = require('./auth.js');
router.use('/api', apiRoutes);

// Routes below:
router.get('/', userController.view);
router.post('/', userController.find);
router.get('/new-customer', userController.form);
router.post('/new-customer', userController.create);
router.get('/edit-customer/:id', userController.edit);
router.post('/edit-customer/:id', userController.update);
router.get('/:id',userController.delete);
router.use('/auth', authRoutes)
  
module.exports = router;