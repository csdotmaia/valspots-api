const { spots } = require('../models')
const { personagem, mapa } = require('../models')

class SpotsController {

  async index(req, res) {
    try{
      const data = await spots.findAll({
        include: [
          {model: mapa},
          {model: personagem}
        ]
      })
      return res.json(data)
    }catch(err){
      return res.status(400).json(err)
    }
  }

  async create(req, res) {
    try {
      const {dataCreate} = req.body

      const data = await spots.create(dataCreate)
      
      return res.json(data)
    } catch (err) {
      return res.status(400).json(err)
    }
  }

}

module.exports = new SpotsController()