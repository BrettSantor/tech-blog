const { User } = require('../models');

const userData = 
    [
        {
        username: 'totallyNotABot01101',
        password: 'password'
    },
    {
        username: 'treasure_hunterzz',
        password: 'password'
    },
    {
        
        username: 'princeOf_purrrsia',
        password: 'password'
    }
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;

