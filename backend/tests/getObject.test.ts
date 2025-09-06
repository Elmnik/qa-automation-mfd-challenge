import { test, expect } from '@playwright/test';
import { ObjectsApi } from '../api/objectsApi';

test('Test_001 - Get a single object', async () => {
  const api = new ObjectsApi();
  const response = await api.getObject('7');

  expect(response.status).toBe(200);

  const data = await response.json();
  expect(data.id).toBe('7');
  expect(data).toHaveProperty('name');
});