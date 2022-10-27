const { Router } = require('express');
const PeopleController = require('../controllers/PeopleController');

const router = Router();

router
	.get('/people', PeopleController.listPeople)
	.get('/people/:studentId/registrations/:registrationId', PeopleController.listByRegistration)
	.get('/people/:studentId/registrations', PeopleController.listRegistrationsByStudent)
	.get('/people/:id', PeopleController.listById)
	.post('/people/:studentId/registrations', PeopleController.createRegistration)
	.post('/people', PeopleController.createPerson)
	.put('/people/:id', PeopleController.updatePerson)
	.put('/people/:studentId/registrations/:registrationId', PeopleController.updateRegistration)
	.delete('/people/:id', PeopleController.deletePerson)
	.delete('/people/:studentId/registrations/:registrationId', PeopleController.deleteRegistration);

module.exports = router;