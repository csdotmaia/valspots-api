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
      nome_sub: {
        allowNull: false,
        type: Sequelize.STRING
      },
      url: {
        allowNull: true,
        type: Sequelize.STRING,
        unique: true
      },
      video: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true
      },
      thumb:{
        allowNull: false,
        type: Sequelize.STRING,
        unique: true
      },
      side:{
        allowNull: false,
        type: Sequelize.STRING
      },
      descricao: {
        allowNull: false,
        type: Sequelize.STRING
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
      personagem_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{
          model: 'personagem',
          key: 'id'
        },
        onDelete: 'CASCADE',
      },
      teclado:{
        allowNull: true,
        type: Sequelize.STRING
      },      
      status: {
        allowNull: false,
        type: Sequelize.BOOLEAN 
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
