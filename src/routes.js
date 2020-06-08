const {Router} = require('express')
const cors = require('cors')
const HabilidadeController = require('./app/controllers/HabilidadeController')
const PersonagemController = require('./app/controllers/PersonagemController')
const MapaController = require('./app/controllers/MapaController')
const SpotsController = require('./app/controllers/SpotsController')

const routes = Router()

const corsOptions ={
  origin: 'http://192.168.1.4:3000/',
  optionsSuccessStatus: 200
}

routes.get('/personagem/all', PersonagemController.getAll)
routes.get('/mapa/all', MapaController.getAll)
routes.get('/habilidade/all', HabilidadeController.getAll)
routes.get('/spot/all', SpotsController.index)

// routes.post('/habilidade/create', HabilidadeController.create)

routes.get('/personagem/show', PersonagemController.index)
routes.post('/personagem/create', PersonagemController.create)
routes.delete('/personagem/delete/:id', PersonagemController.delete)

module.exports = routes