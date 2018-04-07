import bcrypt from 'bcrypt';
import { saltRounds } from 'Config';


export default async (password) => {
	return await bcrypt.hash(password, saltRounds);
};