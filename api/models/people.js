'use strict';
module.exports = (sequelize, DataTypes) => {
  const People = sequelize.define('People', {
    name: {
		type: DataTypes.STRING,
		validate: {
			validationFunction: function(data) {
				if (data.length < 3) throw new Error('Name should have more than 3 characters');
			}
		}
	},
    active: DataTypes.BOOLEAN,
    email: {
		type: DataTypes.STRING,
		validate: {
			isEmail: {
				args: true,
				msg: 'Invalid mail'
			}
		}
	},
    role: DataTypes.STRING
  	}, 
	{ 
	paranoid: true,
	defaultScope: {
		where: { active: true}
	},
	scopes: {
		all: { where: {} }
	}});
  People.associate = function(models) {
    People.hasMany(models.Registrations, { 
		foreignKey: 'student_id',
		scope: { status: 'active' },
		as: 'registeredClasses'});
	People.hasMany(models.Classes, { foreignKey: 'teacher_id' });
  };
  return People;
};