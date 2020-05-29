'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return Promise.all([
        queryInterface.addColumn('mapa', 'status', {
          allowNull: false,
          type: Sequelize.BOOLEAN 
        }),
        queryInterface.addColumn('personagem', 'status', {
          allowNull: false,
          type: Sequelize.BOOLEAN 
        }),
        queryInterface.addColumn('habilidade', 'status', {
          allowNull: false,
          type: Sequelize.BOOLEAN 
        }),
        queryInterface.addColumn('spots', 'status', {
          allowNull: false,
          type: Sequelize.BOOLEAN 
        }),
      ])
  },

  down: (queryInterface, Sequelize) => {
      return Promise.all([
         queryInterface.removeColumn('mapa', 'status'),
         queryInterface.removeColumn('personagem', 'status'),
         queryInterface.removeColumn('habilidade', 'status'),
         queryInterface.removeColumn('spots', 'status'),
      ])
  }
};
