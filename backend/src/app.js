'use strict';
const express = require('express')
const app = express()
const cors = require('cors')

//settings
app.set('port', process.env.PORT || 4000)

//middlewares
app.use(cors())
app.use(express.json())

//routes
app.get('/api/users', (req, res) => res.json({ 'message': 'Users routes' }))
app.get('/api/tweets', (req, res) => res.send({ 'message': 'Tweets routes' }))

module.exports = app