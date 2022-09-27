const router = require('express').Router();
const { Client } = require('../../models');


// GET /api/clients
router.get('/', (req, res) => {
    Client.findAll()
        .then(dbClientData => res.json(dbClientData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// GET /api/clients/:id
router.get('/:id', (req, res) => {
    Client.findOne()
        .then(dbClientData => {
            if (!dbClientData) {
                res.status(404).json({ message: 'No Client found with this id!' });
                return;
            }
            res.json(dbClientData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/', (req, res) => {
    Client.create({
        customer_name: req.body.customer_name,
        phone_number: req.body.phone_number,
        email_address: req.body.email_address

    })
        .then(dbClientData => {
            res.json(dbClientData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.put('/:id', (req, res) => {
    Client.update(
        {
            customer_name: req.body.customer_name,
            phone_number: req.body.phone_number,
            email_address: req.body.email_address
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
        .then(dbClientData => res.json(dbClientData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.delete('/:id', (req, res) => {
    Client.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbClientData => res.json(dbClientData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;
