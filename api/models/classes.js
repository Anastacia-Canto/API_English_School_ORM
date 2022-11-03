'use strict';
module.exports = (sequelize, DataTypes) => {
  const Classes = sequelize.define('Classes', {
    date_start: DataTypes.DATEONLY
  }, { paranoid: true });
  Classes.associate = function(models) {
    Classes.hasMany(models.Registrations, { foreignKey: 'class_id' });
	Classes.belongsTo(models.People, { foreignKey: 'teacher_id' });
	Classes.belongsTo(models.Levels, { foreignKey: 'level_id' });
  };
  return Classes;
};