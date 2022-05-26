'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('players', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      guildId: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
        references: {
          model: 'guilds',
          key: 'id',
          as: 'guildId'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      score_1: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      score_2: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      score_3: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('players');
  }
};