'use strict';
const { Schema, model } = require('mongoose')

const TweetSchema = new Schema({
  body: {
    required: true,
    type: String
  },
  user: String,
}, {
  timestamps: true
})

module.exports = model('tweet', TweetSchema)