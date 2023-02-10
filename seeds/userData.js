const { User } = require('../models');

const userData = 
    [
        {
        username: 'totallyNotABot01101',
        password: '$2b$10$iDWDYsXVvL0.dVTd.hduwug48PXkXSWOJbUpMm.y3xM2b5/4RMRUy'
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

