const {Router} = require('express')
const bcrypt = require('bcrypt')
const config = require('./config/secret')
const HabilidadeController = require('./app/controllers/HabilidadeController')
const PersonagemController = require('./app/controllers/PersonagemController')
const MapaController = require('./app/controllers/MapaController')
const SpotsController = require('./app/controllers/SpotsController')

function checkIp(req, res, next) {
  const {token} = req.body
  if(token === config.TOKEN){
    next()
  }else{
    return res.status(404).json({'err': 'IP Not Allowed'})
  }
}

const routes = Router()

routes.post('/personagem/all', checkIp, PersonagemController.getAll)
routes.post('/mapa/all', checkIp, MapaController.getAll)
routes.post('/habilidade/all', checkIp, HabilidadeController.getAll)
routes.post('/spot/all', checkIp, SpotsController.index)

// routes.post('/habilidade/create', HabilidadeController.create)

routes.get('/personagem/show', PersonagemController.index)
// routes.post('/personagem/create', PersonagemController.create)
// routes.delete('/personagem/delete/:id', PersonagemController.delete)

module.exports = routes