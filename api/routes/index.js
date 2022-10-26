const bodyParser = require('body-parser');
const individuals = require('./individualsRoute');

module.exports = app => {
	//use() tells Express that there is something that acts between the requisitions and Express
	//bodyParser.json() converts the requisition body to JSON format.
	app.use(bodyParser.json(), individuals);
	app.get('/', (req, res) => res.send('Welcome to English School!'));
};