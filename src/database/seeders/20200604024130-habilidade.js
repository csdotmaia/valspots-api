'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('habilidade', [
        //Breach
        {
          nome: 'Aftershock',
          teclado: 'c',
          icone: 'aftershock',
          personagem_id: 37,
          status: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Flashpoint',
          teclado: 'q',
          icone: 'flashpoint',
          personagem_id: 37,
          status: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Fault line',
          teclado: 'e',
          icone: 'fault-line',
          personagem_id: 37,
          status: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Rolling Thunder',
          teclado: 'x',
          icone: 'rolling-thunder',
          personagem_id: 37,
          status: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        //Cypher
        {
          nome: 'Trapwire',
          teclado: 'c',
          icone: 'trapwire',
          personagem_id: 38,
          status: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Cyber cage',
          teclado: 'q',
          icone: 'cyber-cage',
          personagem_id: 38,
          status: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Spycam',
          teclado: 'e',
          icone: 'spycam',
          personagem_id: 38,
          status: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Neutral theft',
          teclado: 'x',
          icone: 'neural-theft',
          personagem_id: 38,
          status: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        //Omen
        {
          nome: 'Shrouded step',
          teclado: 'c',
          icone: 'shrouded-step',
          personagem_id: 39,
          status: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Paranoia',
          teclado: 'q',
          icone: 'paranoia',
          personagem_id: 39,
          status: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Dark cover',
          teclado: 'e',
          icone: 'dark-cover',
          personagem_id: 39,
          status: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'From the shadows',
          teclado: 'x',
          icone: 'from-the-shadows',
          personagem_id: 39,
          status: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        //Raze
        {
          nome: 'Boom bot',
          teclado: 'c',
          icone: 'boom-bot',
          personagem_id: 40,
          status: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Blast pack',
          teclado: 'q',
          icone: 'blast-pack',
          personagem_id: 40,
          status: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Paint shells',
          teclado: 'e',
          icone: 'paint-shells',
          personagem_id: 40,
          status: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Showstopper',
          teclado: 'x',
          icone: 'showstopper',
          personagem_id: 40,
          status: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        //Viper
        {
          nome: 'Snake bite',
          teclado: 'c',
          icone: 'snake-bite',
          personagem_id: 41,
          status: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Poison cloud',
          teclado: 'q',
          icone: 'poison-cloud',
          personagem_id: 41,
          status: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Toxic screen',
          teclado: 'e',
          icone: 'toxic-screen',
          personagem_id: 41,
          status: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Vipers pit',
          teclado: 'x',
          icone: 'vipers-pit',
          personagem_id: 41,
          status: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        //Jett
        {
          nome: 'Cloudburst',
          teclado: 'c',
          icone: 'cloudburst',
          personagem_id: 42,
          status: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Updraft',
          teclado: 'q',
          icone: 'updraft',
          personagem_id: 42,
          status: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Tailwind',
          teclado: 'e',
          icone: 'tailwind',
          personagem_id: 42,
          status: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Blade storm',
          teclado: 'x',
          icone: 'blade-storm',
          personagem_id: 42,
          status: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        //Phoenix
        {
          nome: 'Blaze',
          teclado: 'c',
          icone: 'blaze',
          personagem_id: 43,
          status: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Curveball',
          teclado: 'q',
          icone: 'curveball',
          personagem_id: 43,
          status: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Hot hands',
          teclado: 'e',
          icone: 'hot-hands',
          personagem_id: 43,
          status: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Run it back',
          teclado: 'x',
          icone: 'run-it-back',
          personagem_id: 43,
          status: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        //Sova
        {
          nome: 'Owl drone',
          teclado: 'c',
          icone: 'owl-drone',
          personagem_id: 44,
          status: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Shock bolt',
          teclado: 'q',
          icone: 'shock-bolt',
          personagem_id: 44,
          status: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Recon bolt',
          teclado: 'e',
          icone: 'recon-bolt',
          personagem_id: 44,
          status: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Hunters fury',
          teclado: 'x',
          icone: 'hunters-fury',
          personagem_id: 44,
          status: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        //Brimstone
        {
          nome: 'Stim beacon',
          teclado: 'c',
          icone: 'stim-beacon',
          personagem_id: 45,
          status: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Incendiary',
          teclado: 'q',
          icone: 'incendiary',
          personagem_id: 45,
          status: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Sky smoke',
          teclado: 'e',
          icone: 'sky-smoke',
          personagem_id: 45,
          status: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Orbital strike',
          teclado: 'x',
          icone: 'orbital-strike',
          personagem_id: 45,
          status: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        //Sage
        {
          nome: 'Barrier orb',
          teclado: 'c',
          icone: 'barrier-orb',
          personagem_id: 46,
          status: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Slow orb',
          teclado: 'q',
          icone: 'slow-orb',
          personagem_id: 46,
          status: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Healing orb',
          teclado: 'e',
          icone: 'healing-orb',
          personagem_id: 46,
          status: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Resurrection',
          teclado: 'x',
          icone: 'resurrection',
          personagem_id: 46,
          status: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('habilidade', null, {});
  }
};