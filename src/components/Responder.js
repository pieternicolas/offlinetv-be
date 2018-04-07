export default (res, next, param) => {
	const status = param.status ? param.status : 500;
	const data = param.data;

	switch (status) {
		case 200: case 201:
			res.status(status).json(data);
			break;

		case 404:
			res.status(status).json(data ? data : { error: 'Item not found' });
			break;

		case 409:
			res.status(status).json(data ? data : { error: 'Conflict detected' });
			break;

		default:
			res.status(status).json(data ? data : { error: 'Internal server error' });
	};
};