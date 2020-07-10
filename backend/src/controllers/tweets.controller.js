const Tweet = require('../models/Tweet')
const User = require('../models/User')

module.exports = {
  index: async (req, res, next) => {
    let tweets = await Tweet.find()
    res.json(tweets)
  },
  create: async (req, res, next) => {
    const user = req.userId
    const { body } = req.body
    const tweet = new Tweet({
      body,
      user
    })
    await tweet.save()
    const userById = await User.findByIdAndUpdate(user, { $push: { tweets: tweet } });
    await userById.save();


    res.send(userById)
  }
}