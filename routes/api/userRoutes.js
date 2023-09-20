const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  createFriend,
  removeFried,
} = require('../../controllers/userController');

// /api/users
router
.route('/')
.get(getUsers)
.post(createUser);

// /api/users/:userId
router
  .route('/:userId')
  .get(getSingleUser)
  .put(updateUser) //pasing a parameter throught the url 
  .delete(deleteUser);

// /api/users/:userId
router
  .route('/:userId/friends/:friendId')
  .post(createFriend)
  .delete(removeFried);

module.exports = router;
