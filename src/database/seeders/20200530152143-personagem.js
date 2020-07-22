'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('personagem', [
      {
        nome: 'Breach',
        icone: "breach.png",
        text_solo: 'Flashes, Stuns and AfterShocks',
        text_duo: 'Flashes and Stuns',
        status: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: 'Cypher',
        icone: "cypher.png",
        text_solo: 'Traps, SpyCams and Smokes',
        text_duo: 'Traps, SpyCams Smokes',
        status: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: 'Omen',
        icone: "omen.png",
        text_solo: 'Smokes, Flashes and Teleports',
        text_duo: 'Smokes, Flashes and TP',
        status: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: 'Raze',
        icone: "raze.png",
        text_solo: 'Grenades',
        text_duo: 'Grenades',
        status: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: 'Viper',
        icone: "viper.png",
        text_solo: 'Walls, Smokes and Molotov',
        text_duo: 'Walls, Smokes, Molotov',
        status: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: 'Jett',
        icone: "jett.png",
        text_solo: 'Smokes',
        text_duo: 'Smokes',
        status: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: 'Phoenix',
        icone: "phoenix.png",
        text_solo: 'Molotovs, Walls and Flashes',
        text_duo: 'Molotovs and Walls',
        status: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: 'Sova',
        icone: "sova.png",
        text_solo: 'Arrows and Darts',
        text_duo: 'Arrows and Darts',
        status: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: 'Brimstone',
        icone: "brimstone.png",
        text_solo: 'Molotov and Smokes',
        text_duo: 'Molotov and Smokes',
        status: 1,
        created_at: new Date(),
        updated_at: new Date()
      },      
      {
        nome: 'Sage',
        icone: "sage.png",
        text_solo: 'Orbs and Walls',
        text_duo: 'Orbs and Walls',
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
