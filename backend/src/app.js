'use strict';
const express = require('express')
const app = express()
const cors = require('cors')

//Importing routes
const userRoutes = require('./routes/users.routes')
const tweetRoutes = require('./routes/tweets.routes')

//settings
app.set('port', process.env.PORT || 4000)

//middlewares
app.use(cors())
app.use(express.json())

//routes
app.use('/api/users', userRoutes)
app.use('/api/tweets', tweetRoutes)

module.exports = app