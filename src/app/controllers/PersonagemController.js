const { personagem } = require('../models')

class PersonagemController {

  async index(req, res) {
    try{
      const data = await personagem.findAll()
      return res.json(data)
    }catch(err){
      return res.status(400).json(err)
    }
  }

  async create(req, res) {
    try {
      console.log(req.body)
      const {dataCreate} = req.body
      console.log(dataCreate)

      const data = await personagem.create(dataCreate)
      
      return res.json(data)
    } catch (err) {
      return res.status(400).json(err)
    }
  }

}

module.exports = new PersonagemController()