const User = require('../models/User')
const jwt = require('jsonwebtoken')

module.exports = {
  signup: async (req, res, next) => {
    //In the request, we received this values
    const { name, username, email, password, age } = req.body
    const user = new User({
      name,
      username,
      email,
      password,
      age
    })
    //encrypting password
    user.password = await user.encryptPass(user.password)
    //saving user in the database
    await user.save()
    //create token with jwt
    const token = jwt.sign({ id: user._id }, process.env.SECRET, {
      expiresIn: 60 * 60 * 3
    })
    res.json({ auth: true, token, message: "User created succesfully!" })
  },

  signin: async (req, res, next) => {
    const { username, password } = req.body
    const user = await User.findOne({ username })
    if (!user) {
      return res.status(404).send("The user doesn't exists")
    }
    const passwordIsValid = await user.validatePass(password)
    if (!passwordIsValid) {
      return res.status(404).json({ auth: false, token: null })
    }
    //create token with jwt
    const token = jwt.sign({ id: user._id }, process.env.SECRET, {
      expiresIn: 60 * 60 * 3
    })
    res.json({ auth: true, token, message: 'Signed succesfully' })
  },

  profile: async (req, res, next) => {
    const user = await User.findById(req.userId, { password: 0 })
    if (!user) {
      return res.status(404).send('No user found')
    }
    res.json(user)
  },
  delete: async (req, res, next) => {
    //get the id in the request
    const user = req.userId

    //deleting user
    await User.deleteOne({ _id: user }, (err, res) => {
      if (err) {
        res.send(err)
      } else {
        res.send(res)
      }
    })

    //send message to the client
    res.json({ message: "User deleted succesfully!" })
  }
}