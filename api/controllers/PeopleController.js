const database = require('../models');

class PeopleController {

	static async listPeople(req, res){
		try {
			//findAll() is a sequelize method that converts to the query SELECT * ...
			const people = await database.People.findAll();
			return res.status(200).json(people);
		} catch (err) {
			return res.status(500).json(err.message);
		};
	};

	static async listById(req, res) {
		const { id } = req.params;

		try {
			const person = await database.People.findOne({ 
				where: { 
					id: Number(id) 
				}
			});
			if (!person) return res.status(400).send({message: 'Empty position.'});
			else return res.status(200).json(person);
		} catch (err){
			return res.status(404).json(err.message);
		};
	};

	static async createPerson(req, res){
		const newPerson = req.body;
		try {
			const newCreatedPerson = await database.People.create(newPerson);
			return res.status(201).json(newCreatedPerson);
		} catch (err){
			return res.status(500).json(err.message);
		};
	};

	static async updatePerson(req, res){
		const { id } = req.params;
		const newInfo = req.body;
		try {
			await database.People.update(newInfo, { where: { id: Number(id) } });
			const updatedPerson = await database.People.findOne({ where: { id: Number(id) } });
			if (!updatedPerson) return res.status(400).send({message: 'Empty position.'});
			else return res.status(201).json(updatedPerson);
		} catch (err){
			return res.status(500).json(err.message);
		};
	};

	static async deletePerson(req, res){
		const { id } = req.params;
		try {
			await database.People.destroy({ where: { id: Number(id) } });
			return res.status(201).send({message: `Id ${id} deleted.`});
		} catch (err){
			return res.status(500).json(err.message);
		};
	}
};



module.exports = PeopleController;