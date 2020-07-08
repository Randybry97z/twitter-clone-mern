const User = require('../models/User')


module.exports = {
  signup: async (req, res, next) => {
    const { name, username, email, password, age } = req.body
    const user = new User({
      name,
      username,
      email,
      password,
      age
    })
    user.password = await user.encryptPass(user.password)
    await user.save()
    res.json({ auth: true, message: "User created succesfully!" })
  },
  signin: (req, res, next) => res.json({ message: 'POST Request' }),
  profile: (req, res, next) => res.json({ message: 'POST Request' })
}