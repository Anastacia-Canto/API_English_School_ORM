const database = require('../models');

class LevelController{

	static async listLevels(req, res){
		try {
			const levels = await database.Levels.findAll();
			return res.status(200).json(levels);
		} catch (err){
			return res.status(500).json(err.message);
		};
	};

	static async listById(req, res){
		const { id } = req.params;
		try{
			const level = await database.Levels.findOne({ where: {id: Number(id) } });
			if (!level) return res.status(404).send({message: 'Empty position.'});
			else res.status(200).json(level);
		} catch (err){
			return res.status(500).json(err.message);
		};
	};

	static async createLevel(req, res){
		const newLevel = req.body;
		try{
			const createdLevel = await database.Levels.create(newLevel);
			return res.status(201).json(createdLevel);
		} catch (err){
			return res.status(500).json(err.message);
		};
	};

	static async updateLevel(req, res){
		const { id } = req.params;
		const newInfo = req.body;
		try{
			await database.Levels.update(newInfo, { where: { id: Number(id) } });
			const updatedLevel = await database.Levels.findOne({ where: { id: Number(id) } });
			if (!updatedLevel) return res.status(404).send({message: 'Empty position.'});
			else return res.status(201).json(updatedLevel);
		} catch (err){
			return res.status(500).json(err.message);
		};
	};

	static async deleteLevel(req, res){
		const { id } = req.params;
		try{
			const level = await database.Levels.findOne({ where: { id: Number(id) } });
			if (level){
				await database.Levels.destroy({where: { id: Number(id) } });
				return res.status(201).json({message: `Id ${id} deleted.`});
			} else {
				return res.status(404).send({message: 'Empty position.'});
			};
		} catch (err){
			return res.status(500).json(err.message);
		};
	};
};

module.exports = LevelController;