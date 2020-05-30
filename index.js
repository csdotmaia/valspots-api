const express = require('express')
const routes = require('./src/routes')
const cors = require('cors')

const app = express()

app.use(cors())
// Definição do bodyParser para a API aceitar requisições JSON
app.use(express.json())

app.use(routes)


app.listen(3001)