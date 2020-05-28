'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('spots', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER 
      },
      nome: {
        allowNull: false,
        type: Sequelize.STRING
      },
      video: {
        allowNull: false,
        type: Sequelize.STRING
      },
      descricao: {
        allowNull: false,
        type: Sequelize.STRING
      },
      personagem_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{
          model: 'personagem',
          key: 'id'
        },
        onDelete: 'CASCADE',
      },
      mapa_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{
          model: 'mapa',
          key: 'id'
        },
        onDelete: 'CASCADE',
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },  
    });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('spots');
  }
};
