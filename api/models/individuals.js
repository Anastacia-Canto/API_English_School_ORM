'use strict';
module.exports = (sequelize, DataTypes) => {
  const Individuals = sequelize.define('Individuals', {
    name: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    email: DataTypes.STRING,
    role: DataTypes.STRING
  }, {});
  Individuals.associate = function(models) {
    // associations can be defined here
  };
  return Individuals;
};