import responder from 'Components/Responder.js';
import sessionController from './sessionController.js';
import sessionValidator from './sessionValidator.js';


export default (app) => {

	app.post('/login', sessionValidator, (req, res, next) => {
		sessionController.createUser(req)
			.then(response => responder(res, next, response))
			.catch(error => responder(res, next, error));
	});

};