require("dotenv").config();
import 'babel-polyfill';
import express from 'express';

import { port, database } from 'Config';
import routes from './src/routes.js';
import middlewares from 'Middlewares';


const app = express();

middlewares.preSetupMiddleware(app);
routes(app);
middlewares.postSetupMiddleware(app);

database().then(() => {
	if (process.env.NODE_ENV != 'test')	{
		app.listen(port, () => {
			console.log('We are live on ' + port);
		});
	};
})
.catch(err => {
	console.log('Database connection error.');
	console.log(err);
});


export default app;