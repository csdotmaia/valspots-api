const {Router} = require('express')

const routes = Router()

routes.get('/test', (req, res) => res.json("testadO"))//code

module.exports = routes