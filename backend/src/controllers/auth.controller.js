const User = require('../models/User')


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
    res.json({ auth: true, message: "User created succesfully!" })
  },
  signin: async (req, res, next) => {
    const { username, password } = req.body
    const user = await User.findOne({ username })
    if (!user) {
      return res.status(404).send("The user doesn't exists")
    }
    const passwordIsValid = await user.validatePass(password)
    console.log(passwordIsValid)
    res.json({ message: 'Signed succesfully' })
  },
  profile: (req, res, next) => res.json({ message: 'POST Request' })
}