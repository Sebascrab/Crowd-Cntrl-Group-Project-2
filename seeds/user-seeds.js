const sequelize = require('../config/connection');
const { User } = require('../models');

const userdata = [
    {
        email_address: 'tommyalvarado2@gmail.com',
        password: 'password',
    },
    {
        email_address: 'test@test.com',
        password: 'password',
    },
    
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;