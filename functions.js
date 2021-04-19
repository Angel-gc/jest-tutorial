const axios = require('axios');

beforeEach(() => initDatabase());
afterEach(() => closeDatabase());

const initDatabase = () => console.log('Database Initialized...');
const closeDatabase = () => console.log('Database Closed...');

const functions = {
	add: (num1, num2) => num1 + num2,
	isNull: () => null,
	checkValue: x => x,
	createUser: () => {
		const user = {
			firstName: 'Angel',
		};
		user['lastName'] = 'Concepcion';
		return user;
	},
	fetchTitle: () =>
		axios
			.get('https://jsonplaceholder.typicode.com/todos/1')
			.then(res => res.data)
			.catch(err => 'error'),
};

module.exports = functions;
