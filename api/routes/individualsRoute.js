const { Router } = require('express');
const IndividualController = require('../controllers/IndividualController');

const router = Router();

router.get('/individuals', IndividualController.listIndividuals);

module.exports = router;