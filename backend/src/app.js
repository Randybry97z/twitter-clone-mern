'use strict';
const express = require('express')
const app = express()
const cors = require('cors')
const session = require('express-session')

//session middlewares
const findUserMiddleware = require('./middlewares/find_user')
const authUserMiddleware = require('./middlewares/auth_user')


//Importing routes
const userRoutes = require('./routes/auth.routes')
const tweetRoutes = require('./routes/tweets.routes')

//settings
app.set('port', process.env.PORT || 4000)

//middlewares
app.use(cors())
app.use(express.json())
app.use(session({
  secret: process.env.SESSION_SECRET || 'some-secret',
  resave: false,
  saveUninitialized: false
}))

//routes
app.use(findUserMiddleware)
//app.use(authUserMiddleware)
app.use('/api/users', userRoutes)
app.use('/api/tweets', tweetRoutes)

module.exports = app