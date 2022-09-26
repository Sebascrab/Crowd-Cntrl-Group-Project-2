const {Client} = require('../models');

const clientData = [
    {
        first_name: 'Ryan',
        last_name: 'Charleson',
        email_address: 'ryrycharles@email.com',
        phone_number: 1234567890,
        user_id: 1
    }
];

const seedClients = () => Client.bulkCreate(clientData);

module.exports = seedClients;