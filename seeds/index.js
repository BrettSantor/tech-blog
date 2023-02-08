const sequelize = require('../config/connection');
const seedPost = require('./postData');
const seedComments = require('./commentData');
const seedUsers = require('./userData');

const seedAll = async () => {
    await sequelize.sync({ force:true });

    await seedPost();

    await seedComments();

    await seedUsers();

    process.exit(0);
};

seedAll();