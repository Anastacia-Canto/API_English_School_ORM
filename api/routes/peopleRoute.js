const { Router } = require('express');
const PeopleController = require('../controllers/PeopleController');

const router = Router();

router
	.get('/people', PeopleController.listPeople)
	.get('/people/:id', PeopleController.listById)
	.post('/people', PeopleController.createPerson)
	.put('/people/:id', PeopleController.updatePerson)
	.delete('/people/:id', PeopleController.deletePerson);

module.exports = router;