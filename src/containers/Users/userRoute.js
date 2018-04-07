import responder from 'Components/Responder.js';
import userController from './userController.js';
import userValidator from './userValidator.js';


export default (app) => {

	app.post('/users', userValidator, (req, res, next) => {
		userController.createUser(req)
			.then(response => responder(res, next, response))
			.catch(error => responder(res, next, error));
	});

};