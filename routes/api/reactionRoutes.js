const router = require('express').Router();

const {
    createReaction,
    deleteReaction,
} = require('../../controllers/reactionController');

router.route('/:thoughtId/reactions')
    .post(createReaction); // Create a reaction for a thought by ID

router.route('/:thoughtId/reactions/:reactionId')
    .delete(deleteReaction); // Delete a reaction by ID for a thought by ID

module.exports = router;
