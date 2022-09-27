const sequelize = require('../config/connection');
const { User } = require('../models');

const userdata = [
    {
        email: 'tommyalvarado2@gmail.com',
        password: 'password',
    },
    {
        email: 'test@test.com',
        password: 'password',
    },
    
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;