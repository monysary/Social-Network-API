const router = require('express').Router();
const usersRoute = require('./users-route');
const thoughtRoute = require('./thoughts-route');

router.use('/api/users', usersRoute);
router.use('/api/thoughts', thoughtRoute);

module.exports = router