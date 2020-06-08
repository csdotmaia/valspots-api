'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return Promise.all([
        queryInterface.addColumn('spots', 'teclado', { 
          allowNull: true,
          type: Sequelize.STRING
        }),
        queryInterface.addColumn('spots', 'url', { 
          allowNull: true,
          type: Sequelize.STRING,
          unique: true
        })
      ])

  },

  down: (queryInterface, Sequelize) => {
      return Promise.all([
        queryInterface.removeColumn('spots', 'teclado'),
        queryInterface.removeColumn('spots', 'url')
      ]);
  }
};
