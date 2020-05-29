const {Router} = require('express')
const HabilidadeController = require('./app/controllers/HabilidadeController')
const PersonagemController = require('./app/controllers/PersonagemController')

const routes = Router()

routes.get('/habilidade/show', HabilidadeController.index)
routes.post('/habilidade/create', HabilidadeController.create)

routes.get('/personagem/show', PersonagemController.index)
routes.post('/personagem/create', PersonagemController.create)

module.exports = routes