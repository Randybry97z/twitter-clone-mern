'use strict';
const { Router } = require('express')
const { index, create, update, getTweet, deleteTweet } = require('../controllers/tweets.controller')
const router = Router()

router.route('/')
  .get(index)
  .post(create)

router.route('/:id')
  .get(getTweet)
  .put(update)
  .delete(deleteTweet)

module.exports = router