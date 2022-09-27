const {Client} = require('../models');

const clientData = [
    {
        customer_name: 'Ryan Charleson',
        phone_number: '801-555-5555',
        email_address: 'ryrycharles@email.com',
    }
];

const seedClients = () => Client.bulkCreate(clientData);

module.exports = seedClients;