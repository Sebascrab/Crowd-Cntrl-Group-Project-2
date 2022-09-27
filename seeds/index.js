const userSeeds = require('./user-seeds');
const clientSeeds = require('./clients-seeds');
const sequelize = require('../config/connection');

const seedEverything = async () => {
    await sequelize.sync({force: true});
    console.log('-------------');
    await userSeeds();
    console.log('-------------');
    await clientSeeds();
    process.exit(0);
};

seedEverything();


