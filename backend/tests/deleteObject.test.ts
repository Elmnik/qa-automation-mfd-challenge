// backend/tests/deleteObject.test.ts
import { test, expect } from '@playwright/test';
import { ObjectsApi } from '../api/objectsApi';

let objectId = 'ff8081818e90b96f018e9a1d5d7e0abc'; // Replace dynamically if needed

test('Test_004 - Delete an object', async () => {
  const api = new ObjectsApi();

  const response = await api.deleteObject(objectId);
  expect(response.status).toBe(200);

  const data = await response.json();
  expect(data.message).toContain(`Object with id = ${objectId} has been deleted.`);
});