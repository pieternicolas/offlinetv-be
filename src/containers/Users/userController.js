import userModel from './userModel.js';

export const createUser = (app, data) => {
	return new Promise ((resolve, reject) => {
		userModel.createUser(data)
		.then(res => {
			if (!res) {
				resolve({ status: 404 });
			} else {
				resolve({ status: 200, data: res });
			};
		})
		.catch(err => {
			reject(err);
		});
	});
};

export default { createUser };