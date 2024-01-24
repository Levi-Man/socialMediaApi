const router = require('express').Router();
const{
    getUsers,
    getSingleUser,
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
.delete(deleteUser); // Delete a user by ID

module.exports = router;
