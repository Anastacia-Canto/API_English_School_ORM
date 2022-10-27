const database = require('../models');

class NivelController{

	static async listNivels(req, res){
		try {
			const nivels = await database.Nivels.findAll();
			return res.status(200).json(nivels);
		} catch (err){
			return res.status(500).json(err.message);
		};
	};

	static async listById(req, res){
		const { id } = req.params;
		try{
			const nivel = await database.Nivels.findOne({ where: {id: Number(id) } });
			if (!nivel) return res.status(404).send({message: 'Empty position.'});
			else res.status(200).json(nivel);
		} catch (err){
			return res.status(500).json(err.message);
		};
	};

	static async createNivel(req, res){
		const newNivel = req.body;
		try{
			const createdNivel = await database.Nivels.create(newNivel);
			return res.status(201).json(createdNivel);
		} catch (err){
			return res.status(500).json(err.message);
		};
	};

	static async updateNivel(req, res){
		const { id } = req.params;
		const newInfo = req.body;
		try{
			await database.Nivels.update(newInfo, { where: { id: Number(id) } });
			const updatedNivel = await database.Nivels.findOne({ where: { id: Number(id) } });
			if (!updatedNivel) return res.status(404).send({message: 'Empty position.'});
			else return res.status(201).json(updatedNivel);
		} catch (err){
			return res.status(500).json(err.message);
		};
	};

	static async deleteNivel(req, res){
		const { id } = req.params;
		try{
			const nivel = await database.Nivels.findOne({ where: { id: Number(id) } });
			if (nivel){
				await database.Nivels.destroy({where: { id: Number(id) } });
				return res.status(201).json({message: `Id ${id} deleted.`});
			} else {
				return res.status(404).send({message: 'Empty position.'});
			};
		} catch (err){
			return res.status(500).json(err.message);
		};
	};
};

module.exports = NivelController;