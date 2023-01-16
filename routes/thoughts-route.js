const router = require('express').Router();
const { Thought, User } = require('../models');

// Get all thoughts
router.get('/', async (req, res) => {
    try {
        const thoughts = await Thought.find({});
        res.json(thoughts);
    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
});

// Get single thought
router.get('/:id', async (req, res) => {
    try {
        const oneThought = await Thought.findById(req.params.id)
        res.json(oneThought);
    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
});

// Post a new thought
router.post('/', async (req, res) => {
    try {
        const thought = await Thought.create(req.body)
            .then((newThought) => {
                return User.findOneAndUpdate(
                    { _id: req.body.userId },
                    { $push: { thoughts: newThought._id } },
                    { new: true }
                )
            });
        res.json({ message: `New thought added under user ID ${req.body.userId}` });
    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
});

// Update a thought


// Delete a thought
router.delete('/:id', async (req, res) => {
    try {
        await Thought.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Thought deleted!' })
    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
});

module.exports = router;