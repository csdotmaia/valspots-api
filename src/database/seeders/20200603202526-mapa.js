'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('mapa', [
        {
          nome: 'Split',
          img: 'split.png',
          status: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Haven',
          img: 'haven.png',
          status: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Bind',
          img: 'bind.png',
          status: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Ascent',
          img: 'ascent.jpeg',
          status: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('mapa', null, {});
  }
};
