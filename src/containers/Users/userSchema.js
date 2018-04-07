import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';


const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const userSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
		validate: {
			validator: (v) => { return emailRegex.test(v); },
			message: '{VALUE} is not a valid email address!'
		},
		unique: true
	},
	password: {
		type: String,
		required: true
	},
	dateCreated: {
		type: Date,
		default: Date.now
	}
});

userSchema.plugin(uniqueValidator);


export default mongoose.model('User', userSchema);