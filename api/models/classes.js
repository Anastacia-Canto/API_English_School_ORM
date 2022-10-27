'use strict';
module.exports = (sequelize, DataTypes) => {
  const Classes = sequelize.define('Classes', {
    data_start: DataTypes.DATEONLY
  }, {});
  Classes.associate = function(models) {
    Classes.hasMany(models.Registrations, { foreignKey: 'class_id' });
	Classes.belongsTo(models.Individuals, { foreignKey: 'teacher_id' });
	Classes.belongsTo(models.Nivels, { foreignKey: 'nivel_id' });
  };
  return Classes;
};