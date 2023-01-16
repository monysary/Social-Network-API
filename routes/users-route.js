const router = require('express').Router();
const { User } = require('../models');

// Get all users
router.get('/', async (req, res) => {
    try {
        const users = await User.find({});
        res.json(users);
    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
});

// Get single user by id


// Post new user
router.post('/', async (req, res) => {
    try {
        const users = await User.create(req.body);
        res.json(users);
    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
});

module.exports = router;