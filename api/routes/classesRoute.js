const { Router } = require('express');
const ClassController = require('../controllers/ClassController');

const router = Router();

router
	.get('/Classes', ClassController.listClasses)
	.get('/Classes/:id', ClassController.listById)
	.post('/Classes', ClassController.createClass)
	.put('/Classes/:id', ClassController.updateClass)
	.delete('/Classes/:id', ClassController.deleteClass);



module.exports = router;