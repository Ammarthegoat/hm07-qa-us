// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
	"price": 175
}

test('The status should be 200', async () => {
    try {
		const response = await fetch(`${config.API_URL}/api/v1/products/1`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualStatus = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatus). toBe(200)
});

test('The result should be true', async () => {
	let actualResponseBody;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/products/1`, {
			method: 'PUT',
			headers: {
				'Content-type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualResponseBody = await response.json()
	} catch (error) {
		console.error(error);
		throw error;
	}
	expect(actualResponseBody).toEqual({ok:true});
});

