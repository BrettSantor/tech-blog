const { Comment } = require('../models');

const commentData = [
    {
        post_id: 1,
        user_id: 1,
        content: 'AI is the future!'
    },
    {
        post_id: 2,
        user_id: 1,
        content: "You can't fool a robot! Not that I am one..."
    },
    {
        post_id: 3,
        user_id: 1,
        content: 'This was my first job!'
    },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;