const { Router } = require('express');
const NivelController = require('../controllers/NivelController');

const router = Router();

router
	.get('/nivels', NivelController.listNivels)
	.get('/nivels/:id', NivelController.listById)
	.post('/nivels', NivelController.createNivel)
	.put('/nivels/:id', NivelController.updateNivel)
	.delete('/nivels/:id', NivelController.deleteNivel);

module.exports = router;