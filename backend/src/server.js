const app = require('./app')

app.set('port', process.env.PORT || 4000)

async function main() {
  await app.listen(app.get('port'))
  console.log(`Server on port ${app.get('port')}`)
}

main()