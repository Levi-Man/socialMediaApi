const { Thought } = require('../models');

module.exports = {
    // Create a reaction for a thought
    async createReaction(req, res) {
        try {
            const { thoughtId } = req.params;
            const { reactionBody, username } = req.body;

            // Create a new reaction
            const newReaction = { reactionBody, username };

            // Update the thought's reactions array with the new reaction
            const updatedThought = await Thought.findByIdAndUpdate(
                thoughtId,
                { $push: { reactions: newReaction } },
                { new: true }
            );

            if (!updatedThought) {
                return res.status(404).json({ message: 'No thought with that ID found.' });
            }

            return res.status(201).json(updatedThought);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },

    // Delete a reaction from a thought
    async deleteReaction(req, res) {
        try {
            const { thoughtId, reactionId } = req.params;

            // Update the thought's reactions array by removing the specified reaction
            const updatedThought = await Thought.findByIdAndUpdate(
                thoughtId,
                { $pull: { reactions: { reactionId } } },
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
