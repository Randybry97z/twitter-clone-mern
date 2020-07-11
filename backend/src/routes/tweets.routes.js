'use strict';
const { Router } = require('express')
const TweetController = require('../controllers/tweets.controller');
const verifyToken = require('../controllers/validateToken.controller');
const router = Router()

router.route('/')
  .get(TweetController.index)
  .post(verifyToken, TweetController.create)

router.route('/:id')
  .get(TweetController.getOne)
  .delete(verifyToken, TweetController.delete)


/* router.route('/:id')
  .get(getTweet)
  .put(update)
  .delete(deleteTweet) */

module.exports = router