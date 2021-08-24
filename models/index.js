// import all models
const Post = require('./Post');
const User = require('./User');
const Save = require('./Save');

// create associations
User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
});

User.belongsToMany(Post, {
    through: Save,
    as: 'saved_posts',
    foreignKey: 'user_id'
});

Post.belongsToMany(User, {
    through: Save,
    as: 'saved_posts',
    foreignKey: 'post_id'
});

Save.belongsTo(User, {
    foreignKey: 'user_id'
});

Save.belongsTo(Post, {
    foreignKey: 'post_id'
});

module.exports = { User, Post, Save };
