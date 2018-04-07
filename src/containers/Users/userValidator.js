import { check } from 'express-validator/check';


export default [
	check('email')
		.isEmail()
		.withMessage('Not a valid email address.'),
		
	check('password', 'Passwords must be at least 5 chars long and contain one number.')
		.isLength({ min: 5 })
		.matches(/\d/)
];