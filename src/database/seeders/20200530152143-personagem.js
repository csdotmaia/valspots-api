'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('personagem', [
      {
        nome: 'Breach',
        icone: "https://vignette.wikia.nocookie.net/valorant/images/5/53/Breach_icon.png",
        status: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: 'Cypher',
        icone: "https://vignette.wikia.nocookie.net/valorant/images/8/88/Cypher_icon.png",
        status: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: 'Omen',
        icone: "https://vignette.wikia.nocookie.net/valorant/images/b/b0/Omen_icon.png",
        status: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: 'Raze',
        icone: "https://vignette.wikia.nocookie.net/valorant/images/9/9c/Raze_icon.png",
        status: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: 'Viper',
        icone: "https://vignette.wikia.nocookie.net/valorant/images/5/5f/Viper_icon.png",
        status: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: 'Jett',
        icone: "https://img.rankedboost.com/wp-content/plugins/valorant/assets/character_icons/Jett.png",
        status: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: 'Phoenix',
        icone: "https://img.rankedboost.com/wp-content/plugins/valorant/assets/character_icons/Phoenix.png",
        status: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: 'Sova',
        icone: "https://img.rankedboost.com/wp-content/plugins/valorant/assets/character_icons/Sova.png",
        status: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: 'Brimstone',
        icone: "https://img.rankedboost.com/wp-content/plugins/valorant/assets/character_icons/Brimstone.png",
        status: 1,
        created_at: new Date(),
        updated_at: new Date()
      },      
      {
        nome: 'Sage',
        icone: "https://img.rankedboost.com/wp-content/plugins/valorant/assets/character_icons/Sage.png",
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
