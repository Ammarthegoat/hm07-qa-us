// eslint-disable-next-line no-undef
const config = require('../config');

test('status should be 200', async () => {
    let actualStatus;
    try {
        // Make request
        const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
        actualStatus = response.status;
    } catch (error) {
        console.error(error);
    }
    // Check code status
    expect(actualStatus).toBe(200);
});

test('response body should contain expected data', async () => {
    let responseBody;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
		responseBody = await response.json();
		  
	}catch (error){
	console.error(error);
	}
  
	const wareHouseName = responseBody[0]["name"];
	expect(wareHouseName).toBe("Everything You Need");
	});
