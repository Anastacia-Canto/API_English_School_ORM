const bodyParser = require('body-parser');
const people = require('./peopleRoute');
const levels = require('./levelsRoute');
const classes = require('./classesRoute');


module.exports = app => {
	//use() tells Express that there is something that acts between the requisitions and Express
	//bodyParser.json() converts the requisition body to JSON format.
	app.use(bodyParser.json(), people, levels, classes);
	app.get('/', (req, res) => res.send('Welcome to English School!'));
};