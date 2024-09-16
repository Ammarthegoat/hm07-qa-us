// eslint-disable-next-line no-undef
const config = require('../config');
const testConstants = require('./testConstants');

const requestBody = {
  name: "string",
  cardId: 1
};

test('the response body should have the status code and should be 200', async () => {
 
  let responseStatus;

  try {
    
    const responsePost = await fetch(`${config.API_URL}/api/v1/kits`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    responseStatus = responsePost.status;
    expect(responseStatus).toBe(201); 
    
    const responsePostBody = await responsePost.json();
    const kitId = responsePostBody.id; 
	
    const response = await fetch(`${config.API_URL}/api/v1/kits/${kitId}`, {
      method: 'DELETE',
    });

    responseStatus = response.status;
   
  } catch (error) {
    console.error(error);
  }
  expect(responseStatus).toBe(200);
  
  
});

test('response body and status code should be correct', async () => {
	let responseBody;
  
	try {
	  
	  const responsePost = await fetch(`${config.API_URL}/api/v1/kits`, {
		method: "POST",
		headers: {
		  "Content-Type": "application/json",
		},
		body: JSON.stringify(requestBody),
	  });
  
	  
	  responseStatus = responsePost.status;
	  expect(responseStatus).toBe(201); 
	  
	  const responsePostBody = await responsePost.json();
	  const kitId = responsePostBody.id; 
	  
	  const response = await fetch(`${config.API_URL}/api/v1/kits/${kitId}`, {
		method: 'DELETE',
	  });
  
	  responseBody = await response.json();
	  
	} catch (error) {
	  console.error(error);
	}
	expect(responseBody).toEqual[testConstants.OK_TRUE_DOC_RESPONSE];
	
	
  });
  