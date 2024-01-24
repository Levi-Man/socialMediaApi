const Thought = require('../models/Thought');
const mongoose = require('mongoose');

module.exports = {
    // Create a reaction for a thought
    async createReaction(req, res) {
        try {
            const { thoughtId } = req.params;
            const { reactionBody, username } = req.body;

            // Create a new reaction
            const newReaction = {
                _id: new mongoose.Types.ObjectId(),
                reactionBody,
                username
            };

            // Update the thought's reactions array with the new reaction
            const updatedThought = await Thought.findByIdAndUpdate(
                thoughtId,
                { $push: { reactions: newReaction } },
                { new: true }
            );

            if (!updatedThought) {
                return res.status(404).json({ message: 'No thought with that ID found.' });
            }
            // const addedReaction = updatedThought.reactions.find(
            //     reaction => reaction.reactionBody === newReaction.reactionBody &&
            //         reaction.username === newReaction.username
            // );
            
            return res.status(201).json({updatedThought, addedReaction});
            
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },

    // Delete a reaction from a thought
    async deleteReaction(req, res) {
        try {
            const { thoughtId, reactionId } = req.params;

            const updatedThought = await Thought.findByIdAndUpdate(
                thoughtId,
                { $pull: { reactions: { _id: reactionId } } },
                { new: true }
            );

            if (!updatedThought) {
                return res.status(404).json({ message: 'No thought with that ID found.' });
            }

            return res.json(updatedThought);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },
};
