const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addThoughtResponse,
  removeThoughtResponse,
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

// /api/thought/:thoughtId/responses
router.route('/:thoughtId/responses').post(addThoughtResponse); 

// /api/thought/:thoughtId/responses/:responseId
router.route('/:thoughtId/responses/:responseId').delete(removeThoughtResponse);

module.exports = router;
