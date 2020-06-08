const express = require('express')
const routes = require('./src/routes')
const cors = require('cors')

const app = express()

var corsOptions = {
  origin: 'http://example.com',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors())
// Definição do bodyParser para a API aceitar requisições JSON
app.use(express.json())

app.use(routes)

app.get('/testt', cors(corsOptions), function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for only example.com.'})
})

const server = app.listen(3001, () => {
  console.log('Listening on port %s', server.address().port)
})