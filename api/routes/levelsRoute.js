const { Router } = require('express');
const LevelController = require('../controllers/LevelController');

const router = Router();

router
	.get('/levels', LevelController.listLevels)
	.get('/levels/:id', LevelController.listById)
	.post('/levels/:id/restore', LevelController.restoreLevel)
	.post('/levels', LevelController.createLevel)
	.put('/levels/:id', LevelController.updateLevel)
	.delete('/levels/:id', LevelController.deleteLevel);

module.exports = router;