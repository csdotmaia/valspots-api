'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('spots', [{
      nome: 'B Long roof shot',
      nome_sub: 'From long',
      video: 'https://www.youtube.com/watch?v=zsSpoOaJWXE',
      thumb: 'mid-double-doors-vision-sova-haven',
      side: 'attacker',
      descricao: 'just jump',
      personagem_id: 6,
      mapa_id: 3,
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
