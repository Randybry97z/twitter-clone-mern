'use strict';
//Importing env
require('dotenv').config();

//Importing app.js
const app = require('./app')


//Importing db
require('./db')

async function main() {
  await app.listen(app.get('port'))
  console.log(`Server on port ${app.get('port')}`)
}
main()