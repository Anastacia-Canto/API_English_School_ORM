const { Router } = require('express');
const ClassController = require('../controllers/ClassController');

const router = Router();

router
	.get('/classes', ClassController.listClasses)
	.get('/classes/:id', ClassController.listById)
	.post('/classes/:id/restore', ClassController.restoreClass)
	.post('/classes', ClassController.createClass)
	.put('/classes/:id', ClassController.updateClass)
	.delete('/classes/:id', ClassController.deleteClass);



module.exports = router;