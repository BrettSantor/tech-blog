const Comment = require('./Comment');
const Post = require('./Post');
const User = require('./User');

User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Post.hasMany(Comment, {
    foreignKey: 'post_id'
});

comments.belongsTo(Post,{
    foreignKey: 'post_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = { User, Post, Comment};