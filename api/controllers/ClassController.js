const database = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

class ClassController{

	static async listClasses(req, res){
		const { start_date, final_date } = req.query;
		const where = {};
		start_date || final_date ? where.date_start = {} : null;
		start_date ? where.date_start[Op.gte] = start_date : null;
		final_date ? where.date_start[Op.lte] = final_date : null;
		try {
			const classes = await database.Classes.findAll({ where });
			return res.status(200).json(classes);
		} catch (err){
			return res.status(500).json(err.message);
		};
	};

	// {
	// 	where: {
	// 		date_start: {
	// 			[Op.gte]: date,
	// 			[Op.lte]: date
	// 		}
	// 	}
	// }

	static async listById(req, res){
		const { id } = req.params;
		try{
			const oneClass = await database.Classes.findOne({ where: {id: Number(id) } });
			if (!oneClass) return res.status(404).send({message: 'Empty position.'});
			else res.status(200).json(oneClass);
		} catch (err){
			return res.status(500).json(err.message);
		};
	};

	static async createClass(req, res){
		const newClass = req.body;
		try{
			const createdClass = await database.Classes.create(newClass);
			return res.status(201).json(createdClass);
		} catch (err){
			return res.status(500).json(err.message);
		};
	};

	static async updateClass(req, res){
		const { id } = req.params;
		const newInfo = req.body;
		try{
			await database.Classes.update(newInfo, { where: { id: Number(id) } });
			const updatedClass = await database.Classes.findOne({ where: { id: Number(id) } });
			if (!updatedClass) return res.status(404).send({message: 'Empty position.'});
			else return res.status(201).json(updatedClass);
		} catch (err){
			return res.status(500).json(err.message);
		};
	};

	static async deleteClass(req, res){
		const { id } = req.params;
		try{
			const oneClass = await database.Classes.findOne({ where: { id: Number(id) } });
			if (oneClass){
				await database.Classes.destroy({where: { id: Number(id) } });
				return res.status(201).json({message: `Id ${id} deleted.`});
			} else {
				return res.status(404).send({message: 'Empty position.'});
			};
		} catch (err){
			return res.status(500).json(err.message);
		};
	};

	static async restoreClass(req, res){
		const { id } = req.params;
		try {
			await database.Classes.restore( {where: { id: Number(id) } } );
			return res.status(200).json({ message: `id ${id} restored!`});
		  } catch (err) {
			return res.status(500).json(error.message);
		  };
	};
};

module.exports = ClassController;