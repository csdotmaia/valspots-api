const express = require('express')
const routes = require('./src/routes')
const cors = require('cors')

const app = express()

var corsOptions = {
  origin: 'http://104.248.13.101:3000',
}
app.use(cors())
// Definição do bodyParser para a API aceitar requisições JSON
app.use(express.json())

app.use(routes)

app.get('/testt', cors({origin: '*'}) ,function (req, res, next) {
  res.json({msg: 'asd cors.'})
})

const server = app.listen(3001, () => {
  console.log('Listening on port %s', server.address().port)
})