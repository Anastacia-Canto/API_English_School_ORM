const { Router } = require('express');
const IndividualController = require('../controllers/IndividualController');

const router = Router();

router
	.get('/individuals', IndividualController.listIndividuals)
	.get('/individuals/:id', IndividualController.listById)
	.post('/individuals', IndividualController.createIndividual)
	.put('/individuals/:id', IndividualController.updateIndividuals)
	.delete('/individuals/:id', IndividualController.deleteIndividual);

module.exports = router;