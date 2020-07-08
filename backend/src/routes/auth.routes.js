'use strict';
const { Router } = require('express')
const authController = require('../controllers/auth.controller')
const router = Router()

router.route('/signup')
  .get(authController.signup)

router.route('/signin')
  .post((req, res, next) => res.json({ message: 'POST Request' }))

router.route('/profile')
  .post((req, res, next) => res.json({ message: 'POST Request' }))

module.exports = router