const { habilidade } = require('../models')
const { personagem } = require('../models')

class HabilidadeController {

  async getAll(req, res){
    try {
      const data = await habilidade.findAll({
        include: [
          {model: personagem}
        ]
      })
      return res.json(data)
    } catch (err) {
      return res.status(400).json(err)
    }
  }

  async index(req, res) {
    try{
      const data = await habilidade.findAll({
        include: [
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

      const data = await habilidade.create(dataCreate)
      
      return res.json(data)
    } catch (err) {
      return res.status(400).json(err)
    }
  }

}

module.exports = new HabilidadeController()