'use strict';
module.exports = (sequelize, DataTypes) => {
  const Nivels = sequelize.define('Nivels', {
    descr_nivel: DataTypes.STRING
  }, {});
  Nivels.associate = function(models) {
    Nivels.hasMany(models.Classes, { foreignKey: 'nivel_id' });
  };
  return Nivels;
};