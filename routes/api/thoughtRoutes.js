const router = require('express').Router();

const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
} = require('../../controllers/thoughtController');

router.route('/')
    .get(getThoughts) // Get all thoughts
    .post(createThought); // Create a new thought

router.route('/:thoughtId')
    .get(getSingleThought) // Get a single thought by ID
    .put(updateThought) // Update a thought by ID
    .delete(deleteThought); // Delete a thought by ID

    module.exports = router;