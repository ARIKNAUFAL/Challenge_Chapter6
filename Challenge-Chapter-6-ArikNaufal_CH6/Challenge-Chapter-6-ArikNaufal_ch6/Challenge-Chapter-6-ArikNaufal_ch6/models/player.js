'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class player extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      player.belongsTo(models.guild, {
        as: "guild",
        foreignKey:"guildId", 
        targetKey: "id"
      })
    }
  }
  player.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    guildId: DataTypes.INTEGER,
    score_1: DataTypes.INTEGER,
    score_2: DataTypes.INTEGER,
    score_3: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'player',
  });
  return player;
};
