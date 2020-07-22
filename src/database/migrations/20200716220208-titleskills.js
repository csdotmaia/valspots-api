'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('personagem', 'text_solo', {
        allowNull: false,
        type: Sequelize.STRING 
      }),
      queryInterface.addColumn('personagem', 'text_duo', {
        allowNull: false,
        type: Sequelize.STRING 
      }),
    ])
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('personagem', 'text_solo'),
      queryInterface.removeColumn('personagem', 'text_duo')
    ])
  }
};
