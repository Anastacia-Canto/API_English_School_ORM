const database = require('../models');
const Sequelize = require('sequelize');


class PeopleController {

	static async listActivePeople(req, res){
		try {
			//findAll() is a sequelize method that converts to the query SELECT * ...
			const activePeople = await database.People.findAll();
			return res.status(200).json(activePeople);
		} catch (err) {
			return res.status(500).json(err.message);
		};
	};

	static async listPeople(req, res){
		try {
			//findAll() is a sequelize method that converts to the query SELECT * ...
			const people = await database.People.scope('all').findAll();
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
	};

	static async restorePerson(req, res){
		const { id } = req.params;
		try{
			await database.People.restore( { where: { id: Number(id) } });
			return res.status(200).json({ message: `id ${id} restored!`});
		} catch (err){
			return res.status(500).json(err.message);
		};
	};

	// CRUD for Registrations

	static async listByRegistration(req, res){
		const { studentId, registrationId } = req.params;
		try {
			const registration = await database.Registrations.findOne({ 
				where: { 
					id: Number(registrationId),
					student_id: Number(studentId)
				}
			});
			if (!registration) return res.status(404).send({message: 'Empty registration.'});
			else return res.status(200).json(registration);
		} catch (err){
			return res.status(500).json(err.message);
		};
	};

	static async createRegistration(req, res){
		const { studentId } = req.params;
		const newRegistration = { ...req.body, student_id: Number(studentId)};
		try {
			const newCreatedRegistration = await database.Registrations.create(newRegistration);
			return res.status(201).json(newCreatedRegistration);
		} catch (err){
			return res.status(500).json(err.message);
		};
	};


	static async listRegistrationsByStudent(req, res){
		const { studentId } = req.params;
		try{
			const person = await database.People.findOne({
				where: {
					id: Number(studentId)
				}
			});
			
			// the method getRegisteredClasses is created automatically by Sequelize
			const registrations = await person.getRegisteredClasses();
			return res.status(200).json(registrations);
			
			
		} catch (err){
			return res.status(500).json(err.message);
		};
	};

	static async listRegistrationsByClass(req, res){
		const { classId } = req.params;
		try{
			const registrations = await database.Registrations.findAndCountAll({
				where: {
					class_id: Number(classId),
					status: 'active'
				},
				limit: 20,
				order: [['student_id', 'ASC']]
			});
			return res.status(200).json(registrations);
			
			
		} catch (err){
			return res.status(500).json(err.message);
		};
	};

	static async listCrowdedClasses(req, res){
		const classLimit = 2;

		try{
			const crowdedClasses = await database.Registrations.findAndCountAll({
				where: {
					status: 'active'
				},
				attributes: ['class_id'],
				group: ['class_id'],
				having: Sequelize.literal(`count(class_id) >= ${classLimit}`)
			});
			return res.status(200).json(crowdedClasses.count);
			
		} catch (err){
			return res.status(500).json(err.message);
		};
	};

	static async updateRegistration(req, res){
		const { studentId, registrationId } = req.params;
		const newInfo = req.body;
		try {
			const actualRegistration = await database.Registrations.findOne({ where: { id: Number(registrationId) } });
			if (actualRegistration){
				await database.Registrations.update(newInfo, { 
					where: { 
						id: Number(registrationId),
						student_id: Number(studentId) 
					} 
				});
				const updatedRegistration = await database.Registrations.findOne({ 
					where: { 
						id: Number(registrationId) 
					} 
				});
				return res.status(201).json(updatedRegistration);
			} else {
				return res.status(400).send({message: 'Empty position.'});
			};
		} catch (err){
			return res.status(500).json(err.message);
		};
	};

	static async deleteRegistration(req, res){
		const { studentId, registrationId } = req.params;
		try {
			const actualRegistration = await database.Registrations.findOne({ where: { id: Number(registrationId) } });
			if (actualRegistration){
				await database.Registrations.destroy({ 
					where: { 
						id: Number(registrationId),
						student_id: Number(studentId)
					} 
				});
				return res.status(201).send({message: `Id ${registrationId} deleted.`});
			} else {
				return res.status(400).send({message: 'Empty position.'});
			}
		} catch (err){
			return res.status(500).json(err.message);
		};
	};

	static async restoreRegistration(req, res){
		const { studentId, registrationId } = req.params;
		try{
			await database.Registrations.restore({ 
				where: { 
					id: Number(registrationId), 
					student_id: Number(studentId)
				} 
			});
			return res.status(200).json({ message: `id ${registrationId} restored!`});
		} catch (err){
			return res.status(500).json(err.message);
		};
	};
};



module.exports = PeopleController;