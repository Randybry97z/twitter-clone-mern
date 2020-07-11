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
    //User & id request
    const user = req.userId
    const id = req.params.id
    //Find the tweet to pull in user document
    const tweet = await Tweet.findById(id)
    //Delete tweet by id
    await Tweet.deleteOne({ _id: id }, ((err, res) => {
      if (err) {
        res.send(err)
      } else {
        res.send(res)
      }
    }))
    //Pull the tweet to the user document
    const userById = await User.findByIdAndUpdate(user, { $pull: { tweets: [tweet._id] } })
    //Save the document update
    await userById.save()
    res.json("tweet deleted")
  },
  getOne: async (req, res, next) => {
    //Get the id of the tweet
    const id = req.params.id

    //Find the tweet by id
    const tweet = await Tweet.findById(id)

    res.json(tweet)
  }
}