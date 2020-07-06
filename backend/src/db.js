const mongoose = require('mongoose')

//env variable, located in .env or dbtest
const URI = process.env.MONGODB_URI
  ? process.env.MONGODB_URI
  : 'mongodb://localhost/dbtest'

//Connection & parameters
mongoose.connect(URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
})

const connection = mongoose.connection

//If the connection if open, show the message
connection.once('open', () => {
  console.log('Database connected')
})