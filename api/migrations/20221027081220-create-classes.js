'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Classes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
	  teacher_id: {
		allowNull: false,
		type: Sequelize.INTEGER,
		references: { model: 'People', key: 'id' }
	  },
      date_start: {
        type: Sequelize.DATEONLY
      },
	  level_id: {
		allowNull: false,
		type: Sequelize.INTEGER,
		references: { model: 'Levels', key: 'id' }
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Classes');
  }
};