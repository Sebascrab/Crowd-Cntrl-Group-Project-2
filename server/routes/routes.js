// to call express
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Routes below:
router.get('/', userController.view);
router.post('/', userController.find);
router.get('/addcustomer', userController.form);
router.post('/addcustomer', userController.create);
router.get('/editcustomer/:id', userController.edit);
router.post('/editcustomer/:id', userController.update);
router.get('/viewcustomer/:id', userController.viewall);
router.get('/:id',userController.delete);
  
module.exports = router;