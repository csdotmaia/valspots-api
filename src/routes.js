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

routes.get('/personagem/all', PersonagemController.getAll)
routes.get('/mapa/all', MapaController.getAll)
routes.get('/habilidade/all', HabilidadeController.getAll)
routes.get('/spot/all', SpotsController.index)

// routes.post('/habilidade/create', HabilidadeController.create)

routes.get('/personagem/show', PersonagemController.index)
// routes.post('/personagem/create', PersonagemController.create)
// routes.delete('/personagem/delete/:id', PersonagemController.delete)

module.exports = routes