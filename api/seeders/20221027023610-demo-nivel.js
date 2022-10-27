'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		  return queryInterface.bulkInsert('Nivels', [
			  {
				  descr_nivel: 'basic',
				  createdAt: new Date(),
				  updatedAt: new Date()			
			  },
			  {
				  descr_nivel: 'intermediate',
				  createdAt: new Date(),
				  updatedAt: new Date()
			  },
			  {
				  descr_nivel: 'advanced',
				  createdAt: new Date(),
				  updatedAt: new Date()
			  } 
	  ], {});
	},
  
	down: (queryInterface, Sequelize) => {
		  return queryInterface.bulkDelete('Nivels', null, {});
	}
  };
