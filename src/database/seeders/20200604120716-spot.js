'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('spots', [{
        nome: 'Mid double doors vision',
        video: 'https://www.youtube.com/watch?v=f4mq8PgocU4',
        descricao: '60% power',
        personagem_id: 44,
        mapa_id: 6,
        teclado: 'e',
        url: 'mid-double-doors-vision-sova-haven',
        status: true,
        created_at: new Date(),
        updated_at: new Date(),
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('spots', null, {});
  }
};
