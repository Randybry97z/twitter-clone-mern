const User = require('../models/User')


module.exports = {
  signup: (req, res, next) => res.json({ message: 'GET Request' }),
  signin: (req, res, next) => res.json({ message: 'POST Request' }),
  me: (req, res, next) => res.json({ message: 'POST Request' })
}