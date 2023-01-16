const router = require('express').Router();
const usersRoute = require('./users-route');

router.use('/api/users', usersRoute);

module.exports = router