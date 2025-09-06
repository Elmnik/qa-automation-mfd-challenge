export class ObjectsApi {
  baseUrl: string;

  constructor() {
    this.baseUrl = 'https://api.restful-api.dev/objects'; // Backend Api Web
  }

  async getObject(id: string) {
    const response = await fetch(`${this.baseUrl}/${id}`);
    return response;
  }

  async createObject(payload: any) {
    const response = await fetch(this.baseUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    return response;
  }

  async updateObject(id: string, payload: any) {
    const response = await fetch(`${this.baseUrl}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    return response;
  }

  async deleteObject(id: string) {
    const response = await fetch(`${this.baseUrl}/${id}`, {
      method: 'DELETE',
    });
    return response;
  }

  async listObjects() {
    const response = await fetch(this.baseUrl);
    return response;
  }
}