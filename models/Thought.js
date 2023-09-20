const mongoose = require('mongoose');
const moment = require('moment');
const { Schema } = mongoose;
const { ReactionSchema } = require('./reaction');

// ThoughtSchema
const ThoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => moment(timestamp).format('MMM Do, YYYY [at] hh:mm a'),
  },
  username: {
    type: String,
    required: true,
  },
  reactions: [ReactionSchema],
});

// Virtual reaction 
ThoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

ThoughtSchema.set('toObject', { getters: true });
ThoughtSchema.set('toJSON', { getters: true });

const Thought = mongoose.model('Thought', ThoughtSchema);
module.exports = Thought;
