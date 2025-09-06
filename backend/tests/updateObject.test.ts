import { test, expect } from '@playwright/test';
import { ObjectsApi } from '../api/objectsApi';

let objectId = 'ff8081818e90b96f018e9a1d5d7e0abc'; // Replace dynamically if needed

test('Test_003 - Update an object', async () => {
  const api = new ObjectsApi();

  const payload = {
    name: 'Updated Phone',
    data: { color: 'blue', capacity: '256GB' }
  };

  const response = await api.updateObject(objectId, payload);
  expect(response.status).toBe(200);

  const data = await response.json();
  expect(data.name).toBe('Updated Phone');
  expect(data.data.capacity).toBe('256GB');
});