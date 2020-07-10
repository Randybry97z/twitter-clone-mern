const Tweet = require('../models/Tweet')
const User = require('../models/User')

module.exports = {
  //Get all tweets
  index: async (req, res, next) => {
    let tweets = await Tweet.find()
    res.json(tweets)
  },
  //Create tweet
  create: async (req, res, next) => {
    //User goes into request
    const user = req.userId
    //the request gives the value of the body
    const { body } = req.body
    //Create new tweet
    const tweet = new Tweet({
      body,
      user
    })
    //Save tweet
    await tweet.save()
    //Fin user by id and add the tweet created
    const userById = await User.findByIdAndUpdate(user, { $push: { tweets: tweet } });
    await userById.save();

    //Send the response of the function
    res.send(userById)
  },
  delete: async (req, res, next) => {
    const id = req.params.id
    const tweet = await Tweet.deleteOne({ id })

    User.update({ $pull: { tweets: tweet } })

    res.send("Tweets eliminados correctamente")

  }
}