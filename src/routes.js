const {Router} = require('express')
const config = require('./config/secret')
const HabilidadeController = require('./app/controllers/HabilidadeController')
const PersonagemController = require('./app/controllers/PersonagemController')
const MapaController = require('./app/controllers/MapaController')
const SpotsController = require('./app/controllers/SpotsController')

function checkTokenGet(req, res, next) {
  const {token} = req.headers
  if(token === config.WEBGETSIMPLETOKEN){
    next()
  }else{
    return res.status(404).json({'err404': 'You dont H/ Access'})
  }
}

const routes = Router()

routes.get('/personagem/all', checkTokenGet, PersonagemController.getAll)
routes.get('/mapa/all',checkTokenGet, MapaController.getAll)
routes.get('/habilidade/all',checkTokenGet, HabilidadeController.getAll)
routes.get('/spots/all',checkTokenGet, SpotsController.getAll)

routes.get('/personagem/:agent', checkTokenGet, PersonagemController.getAgent)
routes.get('/mapa/:map', checkTokenGet, MapaController.getMap)
routes.get('/spots/:spot_url',checkTokenGet, SpotsController.getSpot)
// routes.get('/spots/:name',checkTokenGet, SpotsController.getAll)

// routes.post('/habilidade/create', HabilidadeController.create)

// routes.get('/personagem/show', PersonagemController.index)
// routes.post('/personagem/create', PersonagemController.create)
// routes.delete('/personagem/delete/:id', PersonagemController.delete)

module.exports = routes