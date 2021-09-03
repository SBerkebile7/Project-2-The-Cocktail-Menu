const seedUsers = require('./user-seeds');
const seedPosts = require('./post-seeds');
const seedComments = require('./comment-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('----- DATABASE HAS BEEN SYNCED -----');

  await seedUsers();
  console.log('----- USERS HAVE BEEN SYNCED -----');

  await seedPosts();
  console.log('----- POSTS HAVE BEEN SYNCED -----');

  await seedComments();
  console.log('----- COMMENTS HAVE BEEN SYNCED -----');

  process.exit(0);
};

seedAll();
