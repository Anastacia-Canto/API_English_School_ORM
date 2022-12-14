const { Router } = require('express');
const PeopleController = require('../controllers/PeopleController');

const router = Router();

router
	.get('/people', PeopleController.listActivePeople)
	.get('/people/all', PeopleController.listPeople)
	.get('/people/:studentId/registrations/:registrationId', PeopleController.listByRegistration)
	.get('/people/registrations/:classId/active', PeopleController.listRegistrationsByClass)
	.get('/people/registrations/crowded', PeopleController.listCrowdedClasses)
	.get('/people/:studentId/registrations', PeopleController.listRegistrationsByStudent)
	.get('/people/:id', PeopleController.listById)
	.post('/people/:studentId/registrations', PeopleController.createRegistration)
	.post('/people/:studentId/registrations/:registrationId/restore', PeopleController.restoreRegistration)
	.post('/people', PeopleController.createPerson)
	.post('/people/:id/restore', PeopleController.restorePerson)
	.put('/people/:id', PeopleController.updatePerson)
	.put('/people/:studentId/registrations/:registrationId', PeopleController.updateRegistration)
	.delete('/people/:id', PeopleController.deletePerson)
	.delete('/people/:studentId/registrations/:registrationId', PeopleController.deleteRegistration);

module.exports = router;