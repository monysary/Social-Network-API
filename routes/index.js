const router = require('express').Router();

router.use('/', (req, res) => res.send('Connected!'))

module.exports = router