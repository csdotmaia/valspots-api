'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('habilidade', { 
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
      teclado: {
        allowNull: false,
        type: Sequelize.STRING
      },
      icone:{
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
      return queryInterface.dropTable('habilidade');
  }
};
