import { test, expect } from '@playwright/test';
import { ObjectsApi } from '../api/objectsApi';

let objectId: string;

test('Test_002 - Create a new object', async () => {
  const api = new ObjectsApi();

  const payload = {
    name: 'Test Phone',
    data: { color: 'black', capacity: '128GB' }
  };

  const response = await api.createObject(payload);
  expect(response.status).toBe(200);

  const data = await response.json();
  expect(data).toHaveProperty('id');
  expect(data.name).toBe('Test Phone');

  objectId = data.id;
  console.log(`Created object ID: ${objectId}`);
});