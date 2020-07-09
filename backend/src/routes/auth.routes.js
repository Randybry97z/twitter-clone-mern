'use strict';
const { Router } = require('express')
const authController = require('../controllers/auth.controller')
const router = Router()

router.route('/signup')
  .post(authController.signup)

router.route('/signin')
  .post(authController.signin)

router.route('/profile')
  .post((req, res, next) => res.json({ message: 'POST Request' }))

module.exports = router