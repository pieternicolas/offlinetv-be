import 'babel-polyfill';
import express from 'express';

import { port, database } from './config/';
import routes from './routes/';
import { preSetupMiddleware, postSetupMiddleware } from './middlewares/';


const app = express();

preSetupMiddleware(app);
routes(app);
postSetupMiddleware(app);

database().then(() => {
	if (process.env.NODE_ENV != 'test')	{
		app.listen(port, () => {
			console.log('We are live on ' + port);
		});
	};
});


export default app;