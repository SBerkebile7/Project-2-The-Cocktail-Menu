const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const savedRoutes = require('./saved-routes.js');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/saved', savedRoutes);

module.exports = router;