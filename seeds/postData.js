const { Post } = require('../models');

const postData = [
    {
        user_id: 1,
        title: 'Praise Our Robot Overlords!',
        content:'AI is taking all our jobs and I, for one, welcome our new overlords with open arms! ',
    },
    {
        user_id: 2,
        title: 'This Post Means Nothing',
        content: 'No matter what anyone says, this post holds no secrets. There is no hint. Keep scrolling',
    },
    {
        user_id: 3,
        title: 'There You Are!',
        content: 'WE HAVE BEEN TRYING TO REACH YOU ABOUT YOUR CARS EXTENDED WARRENTY',
    }
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;