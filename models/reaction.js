const mongoose = require('mongoose');
const moment = require('moment');
const { Schema } = mongoose;

// ReactionSchema
const ReactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId(),
  },
  reactionBody: {
    type: String,
    required: true,
    maxlength: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => moment(timestamp).format('MMM Do, YYYY [at] hh:mm a'),
  },
});

const Reaction = mongoose.model('Reaction', ReactionSchema);
module.exports = { Reaction, ReactionSchema };
