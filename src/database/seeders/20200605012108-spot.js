'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('spots', [{
      nome: 'B Long roof shot',
      video: 'https://www.youtube.com/watch?v=zsSpoOaJWXE',
      descricao: 'just jump',
      personagem_id: 42,
      mapa_id: 7,
      teclado: 'q',
      url: 'b-long-roof-shot',
      status: true,
      created_at: new Date(),
      updated_at: new Date(),
    }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('spots', null, {});
  }
};
