import mongoose from 'mongoose';

const schema = new mongoose.Schema({
	username: {
		type: String, required: true 
	},
	password: {
		type: String, required: true 
	},
	dateCreated: {
		type: Date, default: Date.now
	}
});

export default mongoose.model('User', schema);