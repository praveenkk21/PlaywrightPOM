import { test, expect, request } from '@playwright/test';
import { DataFetch } from '../utils/datafetch';

//These needs to be replace based on the actual API
const baseURI = 'https://reqres.in'; // Replace with your actual base URI
const authToken = 'your-auth-token-here'; // Replace with your actual token
const dataFile = 'testData'; // Replace with your actual data file, it has to inside the data folder

const getTestData = new DataFetch(dataFile);
//This is used to set the base URL and headers for all the requests
//********************************************************************/
test.beforeAll(async ({ }) => {
    global.requestContext = await request.newContext({
        baseURL: baseURI,
        extraHTTPHeaders: {
            'Authorization': `Bearer ${authToken}`,
            'Content-Type': 'application/json'
        }
    });
});
//********************************************************************/

// GET API Request
test.only('Demo API GET Test', async () => {
    const values = getTestData.getJsonArray('test3');
    const response = await requestContext.get('/api/users/2');
    expect(response.status()).toBe(200);
    const text = await response.text();
    expect(text).toContain(values.name);
    console.log(await response.json());
})


// POST API Request
test.only('Demo API POST request', async ({ }) => {
    const values = getTestData.getJsonArray('test3')
    const response = await requestContext.post("https://reqres.in/api/users", {
        data: values.data
    });
    expect(response.status()).toBe(201);
    const text = await response.text();
    expect(text).toContain("Praveen");
    console.log(await response.json());
});

// PUT API Request
test('Demo API PUT Request', async ({ }) => {
    const response = await requestContext.put("https://reqres.in/api/users/2", {
        data: {
            "name": "Raghav",
            "job": "teacher"
        }
    });
    expect(response.status()).toBe(200);
    const text = await response.text();
    expect(text).toContain("Raghav");
    console.log(await response.json());
});

// DELETE API Request
test('Demo API DELETE Request', async ({ }) => {
    const userId = 2;
    const response = await requestContext.delete("https://reqres.in/api/users/${userId}");
    expect(response.status()).toBe(204);
});

// Replace with your actual token

// POST API Request with Auth Token, it is a just a example with headers and work with actual API 
test.only('Demo API POST request with Auth Token', async ({ }) => {
    const response = await requestContext.post("https://reqres.in/api/users", {
        headers: {
            'Authorization': `Bearer ${authToken}`,
            'Content-Type': 'application/json'
        },
        data: {
            "name": "Raghav",
            "job": "teacher"
        }
    })
});
