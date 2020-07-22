const { spots } = require('../models')
const { personagem, mapa, habilidade } = require('../models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

class SpotsController {

  // async getAgent(req, res) {
  //   try {
  //     const data = await spots.findAll({
  //       include: [
  //         {model: mapa},
  //         {model: personagem,
  //           include: [
  //             {model: habilidade}
  //           ],
  //           where:
  //         },
  //       ]
  //     })
  //   } catch (err) {
  //     return res.status(400).json(err)
  //   }
  // }
  
  async getAll(req, res) {
    try{
      const data = await spots.findAll({
        include: [
          {model: mapa},
          {model: personagem,
            include: [
              {model: habilidade}
            ]
          },
        ]
      })
      return res.json(data)
    }catch(err){
      return res.status(400).json(err)
    }
  }

  async getSpot(req, res) {
    try{
      const data = await spots.findOne({
        where:{
          url: req.params.spot_url
        },
        include: [
          {model: mapa},
          {model: personagem,
            include: [
              {model: habilidade}
            ]
          },
        ]
      })
      return res.json(data)
    }catch(err){
      return res.status(400).json(err)
    }
  }

  
  // async getAll(req, res) {
  //   try{
  //     const data = await personagem.findAll({
  //       include: [
  //         {
  //           model: habilidade,
  //           where: {
  //             teclado:{
  //               [Sequelize.Op.like]: 'q'
  //             }
  //           }
  //         },
  //       ]
  //     })
  //     return res.json(data)
  //   }catch(err){
  //     return res.status(400).json(err)
  //   }
  // }

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