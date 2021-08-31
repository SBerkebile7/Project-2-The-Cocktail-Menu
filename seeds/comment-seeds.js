const { Comment } = require('../models');

const commentdata = [
    {
        comment_text: 'Nunc rhoncus dui vel sem.',
        user_id: 1,
        post_id: 2
    },
    {
        comment_text: 'Mauris aliquam ornare risus, non tempor libero consequat quis. Nunc luctus.',
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: 'Maecenas nec ante condimentum, semper leo nec, laoreet orci. Vestibulum ante.',
        user_id: 3,
        post_id: 1
    },
    {
        comment_text: 'Donec blandit enim eget leo condimentum, sed suscipit lorem porttitor. Nunc.',
        user_id: 4,
        post_id: 1
    },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;