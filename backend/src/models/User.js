'use strict';
const { Schema, model } = require('mongoose')
const bcrypt = require('bcryptjs')

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
  age: Number
}, {
  timestamps: true
})

UserSchema.methods.encryptPass = async (password) => {
  const salt = await bcrypt.genSalt(10)
  return bcrypt.hash(password, salt)
}

UserSchema.methods.validatePass = function (password) {
  return bcrypt.compare(password, this.password)
}

module.exports = model('User', UserSchema)