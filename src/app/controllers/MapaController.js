const { mapa } = require('../models')

class MapaController {

  async getAll(req, res){
    try {
      const data = await mapa.findAll()
      return res.json(data)
    } catch (err) {
      return res.status(400).json(err)
    }
  }

  async index(req, res) {
    try{
      const data = await mapa.findAll()
      return res.json(data)
    }catch(err){
      return res.status(400).json(err)
    }
  }

  async create(req, res) {
    try {
      const {dataCreate} = req.body

      const data = await mapa.create(dataCreate)
      
      return res.json(data)
    } catch (err) {
      return res.status(400).json(err)
    }
  }

}

module.exports = new MapaController()