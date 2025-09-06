import { test, expect } from '@playwright/test';
import { ObjectsApi } from '../api/objectsApi';

test('Test_004 - Delete an object', async () => {
  const api = new ObjectsApi();

  // Create a new method for this specifics scenario in order to use their own object
  const createResponse = await api.createObject({
    name: 'Temp To Delete',
    data: { color: 'red', capacity: '64GB' }
  });
  const created = await createResponse.json();
  const objectId = created.id;

  // Delete the object
  const deleteResponse = await api.deleteObject(objectId);
  expect(deleteResponse.status).toBe(200);

  const data = await deleteResponse.json();
  expect(data.message).toContain(`Object with id = ${objectId} has been deleted.`);
});
