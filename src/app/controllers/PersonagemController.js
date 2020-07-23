const { personagem } = require('../models')
const { habilidade } = require('../models')

class PersonagemController {

  async getAll(req, res){
    try {
      const data = await personagem.findAll({
        include: {
          model: habilidade
        }
      })
      return res.json(data)
    } catch (err) {
      return res.status(400).json(err)
    }
  }

  async getAgent(req, res) {
    try {
      const data = await personagem.findOne({
        where:{
          nome: req.params.agent
        },
        attributes: [
          'nome', 'icone', 'text_solo', 'text_duo'
        ],
        include:[
          {
            model: habilidade, 
            attributes:['teclado', 'icone']
          }
        ]
      })
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