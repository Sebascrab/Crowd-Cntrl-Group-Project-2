const router = require('express').Router();

const { User, Client} = require('../models');

router.get('/', (req,res) => {
    res.render('login');
});

router.get('/dashboard', (req,res) => {
    res.render('dashboard');
});

router.get('/signup', (req,res) => {
    res.render('sign-up');
});
module.exports = router;