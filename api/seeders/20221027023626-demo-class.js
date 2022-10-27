'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		  return queryInterface.bulkInsert('Classes', [
			  {
				  data_start: "2020-02-01",
				  nivel_id: 1,
				  teacher_id: 6,
				  createdAt: new Date(),
				  updatedAt: new Date()				 
			  },
			  {
				  data_start: "2020-02-01",
				  nivel_id: 2,
				  teacher_id: 5,
				  createdAt: new Date(),
				  updatedAt: new Date()			
			  },
			  {
				  data_start: "2020-02-01",
				  nivel_id: 3,
				  teacher_id: 6,
				  createdAt: new Date(),
				  updatedAt: new Date()			
				  },
			  {
				  data_start: "2020-07-01",
				  nivel_id: 3,
				  teacher_id: 6,
				  createdAt: new Date(),
				  updatedAt: new Date()			
			  }
		  ], {});
	},
  
	down: (queryInterface, Sequelize) => {
		  return queryInterface.bulkDelete('Classes', null, {});
	}
  };
