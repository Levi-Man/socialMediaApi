const router = require('express').Router();
const {
    getUsers,
    getSingleUser,
    updateUser,
    createUser,
    deleteUser,

} = require('../../controllers/userController');

// api/users
router.route('/')
    .get(getUsers) // Get all users
    .post(createUser); // Create a new user

// api/users/:userId
router.route('/:userId')
    .get(getSingleUser) // Get a single user
    .delete(deleteUser) // Delete a user by ID
    .put(updateUser); // Update a user by ID
module.exports = router;

// api/users/:userId/friends
router.route('/:userId/friends')
    .post(addFriend); // Add a friend to a user by ID

// api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId')
    .delete(removeFriend); // Remove a friend from a user by ID