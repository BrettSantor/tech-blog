const { User } = require('../models');

const userData = 
    [
        {
        username: 'totallyNotABot01101',
    },
    {
        username: 'treasure_hunterzz',
    },
    {
        
        username: 'princeOf_purrrsia',
    }
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;

