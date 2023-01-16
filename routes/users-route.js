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
router.get('/:id', async (req, res) => {
    try {
        const oneUser = await User.findById(req.params.id)
            .populate('thoughts')
            .populate('friends');
        res.json(oneUser);
    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
});

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

// Update a user
router.put('/:id', async (req, res) => {
    try {
        const updateUser = await User.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({ message: 'User updated!' });
    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
})

module.exports = router;