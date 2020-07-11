'use strict';
const { Router } = require('express')
const authController = require('../controllers/auth.controller');
const verifyToken = require('../controllers/validateToken.controller');
const router = Router()

router.route('/signup')
  .post(authController.signup)

router.route('/signin')
  .post(authController.signin)

router.route('/profile')
  .get(verifyToken, authController.profile)

router.route('/delete')
  .delete(verifyToken, authController.delete)

module.exports = router