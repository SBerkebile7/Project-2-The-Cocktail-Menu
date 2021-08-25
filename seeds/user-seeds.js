const sequelize = require('../config/connection');
const { User } = require('../models');

const userdata = [
    {
        username: 'spennyberk',
        password: 'password123'
    },
    {
        username: 'spennybenny',
        password: 'passpasspass'
    },
    {
        username: 'berkieboy',
        password: 'thepassword'
    },
    {
        username: 'berkspen',
        password: 'lastfirst'
    },
    {
        username: 'sberkrebs',
        password: 'mynamemyname'
    },
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
