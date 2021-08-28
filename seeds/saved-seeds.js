const { Save } = require('../models');

const savedata = [
    {
        user_id: 1,
        post_id: 1
    }
];

const seedSaves = () => Post.bulkCreate(savedata);

module.exports = seedSaves;
