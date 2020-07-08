'use strict';
const { Schema, model } = require('mongoose')

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: String,
  email: {
    type: String,
    required: true
  },
  edad: Number
}, {
  timestamps: true
})

module.exports = model('User', UserSchema)