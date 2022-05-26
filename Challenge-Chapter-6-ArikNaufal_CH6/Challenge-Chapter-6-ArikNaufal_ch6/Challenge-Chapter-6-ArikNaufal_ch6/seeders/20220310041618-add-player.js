'use strict';
module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('players', [
      {
        name: 'anthoni',
        email: 'anthoni@mail.com',
        guildId: 2,
        score_1: 2,
        score_2: 3,
        score_3: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'baron',
        email: 'baron@mail.com',
        guildId: 2,
        score_1: 3,
        score_2: 3,
        score_3: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'charlie',
        email: 'charlie@mail.com',
        guildId: 3,
        score_1: 0,
        score_2: 0,
        score_3: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'dugong',
        email: 'dugong@mail.com',
        guildId: 4,
        score_1: 1,
        score_2: 3,
        score_3: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'fahrul',
        email: 'fahrul@mail.com',
        guildId: 3,
        score_1: 1,
        score_2: 2,
        score_3: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {})
  },

  down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('players',null, {});
  }
};
