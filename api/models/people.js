'use strict';
module.exports = (sequelize, DataTypes) => {
  const People = sequelize.define('People', {
    name: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    email: DataTypes.STRING,
    role: DataTypes.STRING
  }, {});
  People.associate = function(models) {
    People.hasMany(models.Registrations, { foreignKey: 'student_id' });
	People.hasMany(models.Classes, { foreignKey: 'teacher_id' });
  };
  return People;
};