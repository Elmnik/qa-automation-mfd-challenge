import { test, expect } from '@playwright/test';
import { ObjectsApi } from '../api/objectsApi';

test('Test_005 - List all objects', async () => {
  const api = new ObjectsApi();

  const response = await api.listObjects();
  expect(response.status).toBe(200); //Expected Response

  const data = await response.json();
  expect(Array.isArray(data)).toBe(true);
  expect(data[0]).toHaveProperty('id');
  expect(data.length).toBeGreaterThan(0);
});
