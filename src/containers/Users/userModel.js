import mongoose from 'mongoose';
import User from './userSchema.js';

export const createUser = (data) => {
	return new Promise((resolve, reject) => {
		const newUser = new User(data);
		newUser.save()
		.then(res => {
			resolve(res);
		})
		.catch(err => {
			reject(err);
		});
	});
};

export default { createUser };