import { expect } from '@playwright/test';
import { test } from '../fixtures/fixtures';
import exp from 'constants';
const apiBaseURL = process.env.SERVICEURL;
const requestbody = {
  "name": "Apple MacBook Pro 16",
  "data": {
      "year": 2019,
      "price": 1849.99,
      "CPU model": "Intel Core i9",
      "Hard disk size": "1 TB"
    }
};

test.beforeEach(async ({ api }) => {
  //const apiBaseURL = process.env.SERVICEURL;
});

test.describe('API tests', async () => {

    test('GET Request #01', async ({ api }) => {
      const endpoint = `${apiBaseURL}/objects?id=6`
      const response = await api.getRequest(endpoint)
      console.log(await response.json())
      expect(response.status()).toEqual(200);
    });

    test('POST Request #01', async ({ api }) => {
      const endpoint = `${apiBaseURL}/objects`
      const response = await api.postRequest(endpoint, requestbody)
      console.log(await response.json())
      expect(response.status()).toEqual(201);
      expect(response.statusText()).toEqual('Created');
      expect(response.json()).toEqual(requestbody);
    })  
    
    test('PUT Request #01', async ({ api })=>{
      const endpoint = `${apiBaseURL}/objects?id=6`
      const response = await api.putRequest(endpoint, requestbody)
      console.log(await response.json())
      expect(response.status()).toEqual(200);
      expect(response.json()).toEqual(requestbody.name);
    })

    test('DELETE request #01', async ({ api }) => {
      const endpoint = `${apiBaseURL}/objects?id=6`
      const response = await api.deleteRequest(endpoint)
      console.log(await response.json()) 
      expect(response.status()).toEqual(200);
    })  
  });