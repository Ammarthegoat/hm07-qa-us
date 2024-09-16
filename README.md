# Sprint 7 project
In this project, I'm tasked with writing a series of tests for the Urban Grocers API to ensure that the server handles various HTTP requests (GET, POST, PUT, and DELETE) correctly. My main objective is to validate the API's behavior by checking response status codes and verifying the accuracy of the returned data.

Key Objectives:

Task 1: Tests for GET Requests

I'll write tests to verify the response status code.
I'll parse the response body to check if it contains the expected data.

Task 2: Tests for POST Requests

I'll write tests to validate that the POST request returns the correct status code.
I'll ensure the response body contains the expected data.

Task 3: Tests for PUT Requests

I'll confirm that the PUT request returns the appropriate status code.
I'll verify the response body content to ensure the correct data is returned after the update.

Task 4: Tests for DELETE Requests

I'll write tests to check the response status code after a DELETE request.
I'll validate the response body to confirm successful deletion.

Setup:
GitHub & Git Integration: I manage this project using GitHub. The repository is automatically created and cloned for local development.
Server: The Urban Grocers server is provided for testing the API requests.
Tools: I'm using Visual Studio Code for writing code, Jest for running tests, and npm for package management.
The goal of this project is to thoroughly test the Urban Grocers API and ensure its functionality across various endpoints and operations.

Summary of Technologies and Techniques Used

1. Node.js: Used as the server-side environment to execute JavaScript code, allowing for asynchronous programming to handle API requests using `async/await`.
  
2. Jest: A testing framework employed to write and execute unit tests, verifying API responses for status codes and body data in `POST` and `DELETE` requests.

3. node-fetch: A module that implements the `fetch` API in Node.js, enabling HTTP requests to be made to the Urban Grocers API and handling the responses.

4. API Testing: The project tests two main API operations:
   - POST: A request to create a new kit and validate the `201` status code.
   - DELETE: A request to delete the kit and validate the `200` status code, checking that the response body contains the expected data.

5. Test Data: Constants from the `testConstants` file are used to compare the expected response format.

 Instructions to Run the Tests

1. Install Dependencies:  
   Run the following command in your project directory to install required packages:
   npm install

2. Run Tests:  
   Execute the tests using the command: npx jest

3. Debugging:  
   If tests fail, review the console logs for errors, check the API URL in `config.js`, and ensure the server is running.

Using Postman for API Testing

Postman can also be used to test APIs manually:
1. Create a new POST request, set the headers, and provide the required JSON data in the body.
2. Send the request and view the response status and body.  
Postman can also generate code snippets in JavaScript for the `fetch` function, which can be integrated into your Node.js code for automated tests. You can automate testing by using Postman's “Tests” feature to verify status codes and response data, making it a versatile tool for API testing alongside Jest.
