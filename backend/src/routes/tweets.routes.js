'use strict';
const { Router } = require('express')
const TweetController = require('../controllers/tweets.controller');
const verifyToken = require('../controllers/validateToken.controller');
const router = Router()

router.route('/')
  .get(TweetController.index)

router.route('/create')
  .post(verifyToken, TweetController.create)

/* router.route('/:id')
  .get(getTweet)
  .put(update)
  .delete(deleteTweet) */

module.exports = router