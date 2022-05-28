'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Engine extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Engine.init({
    displacement: DataTypes.STRING,
    power: DataTypes.STRING,
    torque: DataTypes.STRING,
    compression: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Engine',
  });
  return Engine;
};