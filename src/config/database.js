import { MongoClient } from 'mongodb';
import mongoose from 'mongoose';

export default async () => {
	try {
		mongoose.connect('mongodb://localhost/offlinetv-dev');
		return await mongoose.connection;
	} catch(err) {
		throw new Error(err)
	};
};