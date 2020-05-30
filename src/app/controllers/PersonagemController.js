const { personagem } = require('../models')

class PersonagemController {

  async getAll(req, res){
    try {
      const data = await personagem.findAll()
      return res.json(data)
    } catch (err) {
      return res.status(400).json(err)
    }
  }

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
      const {dataCreate} = req.body

      const data = await personagem.create(dataCreate)
      
      return res.json(data)
    } catch (err) {
      return res.status(400).json(err)
    }
  }

  async delete(req, res) {
    try {
      // const {dataDelete} = req.body
      // const {id} = dataDelete
      const {id} = req.params

      const data = await personagem.findByPk(id)

      await data.destroy()

      return res.json()
    } catch (err) {
      return res.status(400).json(err)
    }
  }

}

module.exports = new PersonagemController()