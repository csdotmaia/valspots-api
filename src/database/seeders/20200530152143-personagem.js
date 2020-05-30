'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('personagem', [
      {
        nome: 'Sova',
        icone: "https://github.com/Blunix9/valorant-icons/blob/master/png/black/shock-bolt-black.png?raw=true",
        status: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: 'Cypher',
        icone: "https://github.com/Blunix9/valorant-icons/blob/master/png/black/cyber-cage-black.png?raw=true",
        status: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: 'Raze',
        icone: "https://github.com/Blunix9/valorant-icons/blob/master/png/black/blast-pack-black.png?raw=true",
        status: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: 'Sage',
        icone: "https://github.com/Blunix9/valorant-icons/blob/master/png/black/slow-orb-black.png?raw=true",
        status: 1,
        created_at: new Date(),
        updated_at: new Date()
      }      
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('personagem', null, {});
  }
};
