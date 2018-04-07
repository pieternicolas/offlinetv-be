import { validationResult } from 'express-validator/check';
import { matchedData } from 'express-validator/filter';

import userModel from './userModel.js';


export const createUser = (data) => {
	return new Promise ((resolve, reject) => {
		const errors = validationResult(data);
		if (!errors.isEmpty()) {
			reject({ status: 422, data: errors.mapped() });
			return;
		};

		const user = matchedData(data);
		userModel.createUser(user)
		.then(res => {
			if (!res) {
				resolve({ status: 404 });
			} else {
				resolve({ status: 200, data: res });
			};
		})
		.catch(err => {
			reject({ status: 400, data: err });
		});
	});
};


export default { createUser };