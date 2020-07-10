'use strict';
const { Schema, model } = require('mongoose')

const TweetSchema = new Schema({
  body: {
    required: true,
    type: String
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  media: String,
}, {
  timestamps: true
})

module.exports = model('tweet', TweetSchema)