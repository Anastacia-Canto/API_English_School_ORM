const bodyParser = require('body-parser');
const individuals = require('./individualsRoute');
const nivels = require('./nivelsRoute');
const classes = require('./classesRoute');

module.exports = app => {
	//use() tells Express that there is something that acts between the requisitions and Express
	//bodyParser.json() converts the requisition body to JSON format.
	app.use(bodyParser.json(), individuals, nivels, classes);
	app.get('/', (req, res) => res.send('Welcome to English School!'));
};