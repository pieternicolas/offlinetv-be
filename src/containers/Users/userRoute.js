import responder from './../../components/Responder.js';
import userController from './userController.js';

export default (app) => {

	app.post('/users', (req, res, next) => {
		userController.createUser(app, req.body)
			.then(response => {
				// console.log(response)
				responder(res, next, response);
			})
			.catch(error => {
				// console.log('fdasfs')
				console.log(error)
				responder(res, next);
			});
	});

	// app.all('*', (req, res, next) => {
	// 	responder(res, next, { status: 404, data: 'Endpoint does not exist' });
	// });

};