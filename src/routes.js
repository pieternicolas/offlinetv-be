import responder from 'Components/Responder.js';
import userRoute from 'Containers/Users/userRoute.js';


export default (app) => {

	app.get('/', (req, res) => {
		res.status(200).send('T H I C C');
	});

	// Insert other routes here
	userRoute(app);

	// Catch all route
	app.all('*', (req, res, next) => {
		responder(res, next, { status: 404, data: 'Endpoint does not exist' });
	});

};