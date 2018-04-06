import mandatory from './mandatory.js';
import clientError from './clientError.js';


const preSetupMiddleware = (app) => {
	mandatory(app);
};

const postSetupMiddleware = (app) => {
	app.use(clientError);
};


export default { preSetupMiddleware, postSetupMiddleware };