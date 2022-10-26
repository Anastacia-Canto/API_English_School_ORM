const database = require('../models');

class IndividualController {

	static async listIndividuals(req, res){
		try {
			//findAll() is a sequelize method that converts to the query SELECT * ...
			const individuals = await database.Individuals.findAll();
			return res.status(200).json(individuals);
		} catch (error) {
			return res.status(500).json(error.message);
		};
	};
};

module.exports = IndividualController;