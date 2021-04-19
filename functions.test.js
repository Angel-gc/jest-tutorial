const functions = require('./functions');

test('Adds 2 + 2 to equal 4', () => {
	expect(functions.add(2, 2)).toBe(4);
});

test('Adds 2 + 2 to NOT equal 5', () => {
	expect(functions.add(5, 5)).not.toBe(5);
});

test('Should be null', () => {
	expect(functions.isNull()).toBe(null);
});

test('Should be falsy', () => {
	expect(functions.checkValue(0)).toBeFalsy();
});

test('User should be be Angel Concepcion object', () => {
	expect(functions.createUser()).toStrictEqual({
		firstName: 'Angel',
		lastName: 'Concepcion',
	});
});

test('Should be under 1600', () => {
	const load1 = 880;
	const load2 = 700;
	expect(load1 + load2).toBeLessThan(1600);
});

// Regex
test('There is no I in team', () => {
	expect('team').not.toMatch(/I/);
});

// Arrays
test('Admin should be in usernames', () => {
	usernames = ['john', 'karen', 'admin'];
	expect(usernames).toContain('karen');
});

// Async data
test('Title fetched name should be latin', async () => {
	expect.assertions(1);
	const data = await functions.fetchTitle();
	expect(data.title).toEqual('delectus aut autem');
});
