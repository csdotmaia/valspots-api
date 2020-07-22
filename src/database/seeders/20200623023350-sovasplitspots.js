'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('spots', [
      {
        nome: 'Lobby A Reveal',
        nome_sub: 'From A Ramp',
        video: 'https://www.youtube.com/watch?v=HQJOG_4XH7k',
        thumb: 'lobby-a-reveal-from-a-ramp',
        side: 'defender',
        descricao: '100% power',
        personagem_id: 8,
        mapa_id: 1,
        teclado: 'e',
        url: 'lobby-a-reveal-from-a-ramp',
        status: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Lobby A Reveal',
        nome_sub: 'From A Site',
        video: 'https://www.youtube.com/watch?v=3X_EqajXpgo',
        thumb: 'lobby-a-reveal-from-a-site',
        side: 'defender',
        descricao: '2 bar power',
        personagem_id: 8,
        mapa_id: 1,
        teclado: 'e',
        url: 'lobby-a-reveal-from-a-site',
        status: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Lobby A Reveal',
        nome_sub: 'From Heaven',
        video: 'https://www.youtube.com/watch?v=KVHo48VhoP4',
        thumb: 'lobby-a-reveal-from-heaven',
        side: 'defender',
        descricao: '2 bar power; aim to the corner of building',
        personagem_id: 8,
        mapa_id: 1,
        teclado: 'e',
        url: 'lobby-a-reveal-from-heaven',
        status: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Main A Reveal',
        nome_sub: 'From A Site',
        video: 'https://www.youtube.com/watch?v=BluJJL1TdrE',
        thumb: 'main-a-reveal-from-a-site',
        side: 'defender',
        descricao: '2 bar power; align the fourth corner with left side of the crown',
        personagem_id: 8,
        mapa_id: 1,
        teclado: 'e',
        url: 'main-a-reveal-from-a-site',
        status: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Top Mid Reveal',
        nome_sub: 'From Mid Vent',
        video: 'https://www.youtube.com/watch?v=NRJ2HKghe98',
        thumb: 'top-mid-reveal-from-mid-vent',
        side: 'defender',
        descricao: '2 bar power; align the fourth corner with left side of the crown',
        personagem_id: 8,
        mapa_id: 1,
        teclado: 'e',
        url: 'top-mid-reveal-from-mid-vent',
        status: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
  ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('spots', null, {});
  }
};
