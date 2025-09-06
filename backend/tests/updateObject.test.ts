import { test, expect } from '@playwright/test';
import { ObjectsApi } from '../api/objectsApi';

test('Test_003 - Update an object', async () => {
  const api = new ObjectsApi();

  // We had to split the previous case ii was using their same object 
  const createResponse = await api.createObject({
    name: 'Temp Phone',
    data: { color: 'black', capacity: '128GB' }
  });
  const created = await createResponse.json();
  const objectId = created.id;

  // With this inclusion, we make sure that each test has their own object
  const updateResponse = await api.updateObject(objectId, {
    name: 'Updated Phone',
    data: { color: 'blue', capacity: '256GB' }
  });

  expect(updateResponse.status).toBe(200);
  const updated = await updateResponse.json();

  expect(updated.name).toBe('Updated Phone');
  expect(updated.data.capacity).toBe('256GB');
});