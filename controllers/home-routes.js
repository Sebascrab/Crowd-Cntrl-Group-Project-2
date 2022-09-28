const router = require('express').Router();
const withAuth = require('../utils/auth');
const { User, Client } = require('../models');

router.get('/', (req, res) => {
    res.render('login', { loggedIn: req.user });
});

router.get('/dashboard', withAuth, (req, res) => {
    async function getClients() {
        const clients = await Client.findAll();
        return clients.dataValues;
    }
    async function renderDashboard() {
        try {
            const clients = await getClients()
            res.render('dashboard', {
                loggedIn: req.user, clients
            });

        } catch (error) {
            console.log(error);
            res.redirect('/')
        }
    }
    renderDashboard();
});

router.get('/signup', (req, res) => {
    res.render('sign-up');
});
router.get('/addclient', withAuth, (req, res) => {
    res.render('add-client');
});
router.get('/editclient', withAuth, (req, res) => {
    res.render('edit-client');
});
router.get('/logout', (req, res) => {
    req.logout(function (err) {
        if (err) {
            return next(err);
        }
        res.redirect('/');
    })
});
module.exports = router;