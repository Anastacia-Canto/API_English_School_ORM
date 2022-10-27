'use strict';
module.exports = (sequelize, DataTypes) => {
  const Individuals = sequelize.define('Individuals', {
    name: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    email: DataTypes.STRING,
    role: DataTypes.STRING
  }, {});
  Individuals.associate = function(models) {
    Individuals.hasMany(models.Classes, { foreignKey: 'teacher_id' });
	Individuals.hasMany(models.Registrations, { foreignKey: 'student_id' });
  };
  return Individuals;
};