import { test, expect } from '@playwright/test';
import { ObjectsApi } from '../api/objectsApi';

test('Test_001 - Get a single object', async () => { //Simple call using the main method
  const api = new ObjectsApi();
  const response = await api.getObject('7');

  expect(response.status).toBe(200); //Basic Response from the api

  const data = await response.json();
  expect(data.id).toBe('7');
  expect(data).toHaveProperty('name');
});
