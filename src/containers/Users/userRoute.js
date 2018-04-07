import responder from 'Components/Responder.js';
import userController from './userController.js';

export default (app) => {

	app.post('/users', (req, res, next) => {
		userController.createUser(app, req.body)
			.then(response => responder(res, next, response))
			.catch(error => responder(res, next, error));
	});

};