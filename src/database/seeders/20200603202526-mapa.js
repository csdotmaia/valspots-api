'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('mapa', [
        {
          nome: 'Split',
          img: 'split2.png',
          status: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Haven',
          img: 'haven2.png',
          status: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Bind',
          img: 'bind2.png',
          status: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Ascent',
          img: 'ascent2.jpeg',
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
