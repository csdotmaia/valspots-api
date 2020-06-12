'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('personagem', [
      {
        nome: 'Breach',
        icone: "breach.png",
        status: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: 'Cypher',
        icone: "cypher.png",
        status: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: 'Omen',
        icone: "omen.png",
        status: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: 'Raze',
        icone: "raze.png",
        status: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: 'Viper',
        icone: "viper.png",
        status: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: 'Jett',
        icone: "jett.png",
        status: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: 'Phoenix',
        icone: "phoenix.png",
        status: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: 'Sova',
        icone: "sova.png",
        status: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: 'Brimstone',
        icone: "brimstone.png",
        status: 1,
        created_at: new Date(),
        updated_at: new Date()
      },      
      {
        nome: 'Sage',
        icone: "sage.png",
        status: 1,
        created_at: new Date(),
        updated_at: new Date()
      },      
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('personagem', null, {});
  }
};
