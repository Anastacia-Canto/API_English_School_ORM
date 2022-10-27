const database = require('../models');

class IndividualController {

	static async listIndividuals(req, res){
		try {
			//findAll() is a sequelize method that converts to the query SELECT * ...
			const individuals = await database.Individuals.findAll();
			return res.status(200).json(individuals);
		} catch (err) {
			return res.status(500).json(err.message);
		};
	};

	static async listById(req, res) {
		const { id } = req.params;

		try {
			const individual = await database.Individuals.findOne({ 
				where: { 
					id: Number(id) 
				}
			});
			if (!individual) return res.status(400).send({message: 'Empty position.'});
			else return res.status(200).json(individual);
		} catch (err){
			return res.status(404).json(err.message);
		};
	};

	static async createIndividual(req, res){
		const newIndividual = req.body;
		try {
			const newCreatedIndividual = await database.Individuals.create(newIndividual);
			return res.status(201).json(newCreatedIndividual);
		} catch (err){
			return res.status(500).json(err.message);
		};
	};

	static async updateIndividuals(req, res){
		const { id } = req.params;
		const newInfo = req.body;
		try {
			await database.Individuals.update(newInfo, { where: { id: Number(id) } });
			const updatedIndividual = await database.Individuals.findOne({ where: { id: Number(id) } });
			if (!updatedIndividual) return res.status(400).send({message: 'Empty position.'});
			else return res.status(201).json(updatedIndividual);
		} catch (err){
			return res.status(500).json(err.message);
		};
	};

	static async deleteIndividual(req, res){
		const { id } = req.params;
		try {
			await database.Individuals.destroy({ where: { id: Number(id) } });
			return res.status(201).send({message: `Id ${id} deleted.`});
		} catch (err){
			return res.status(500).json(err.message);
		};
	}
};



module.exports = IndividualController;