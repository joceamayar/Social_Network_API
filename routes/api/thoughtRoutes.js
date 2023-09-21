const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  // addThoughtResponse,
  // removeThoughtResponse,
  createReaction,
  removeReaction,
} = require('../../controllers/thoughtController');

// /api/thought
router
.route('/')
.get(getThoughts)
.post(createThought);

// /api/thought/:thoughtId
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought) //pasing a parameter throught the url 
  .delete(deleteThought);

// /api/thought/:thoughtId/reaction 
router.route('/:thoughtId/reaction/')
  .post(createReaction);

// /api/thought/:thoughtId/reaction/:reactionId
router.route('/:thoughtId/reaction/:reactionId')
  .delete(removeReaction);

module.exports = router;
