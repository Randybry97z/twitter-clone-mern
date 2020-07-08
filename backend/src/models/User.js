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
  edad: Int32Array
}, {
  timestamps: true
})

module.exports = model('user', UserSchema)
