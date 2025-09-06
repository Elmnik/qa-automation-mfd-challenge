export class ObjectsApi {
  baseUrl: string;

  constructor() {
    this.baseUrl = 'https://api.restful-api.dev/objects'; // Backend Api Web
  }

  async getObject(id: string) { //First Method 
    const response = await fetch(`${this.baseUrl}/${id}`);
    return response;
  }

  async createObject(payload: any) { //Second Method
    const response = await fetch(this.baseUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    return response;
  }

  async updateObject(id: string, payload: any) { //Third Method
    const response = await fetch(`${this.baseUrl}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    return response;
  }

  async deleteObject(id: string) { //Fourth Method
    const response = await fetch(`${this.baseUrl}/${id}`, {
      method: 'DELETE',
    });
    return response;
  }

  async listObjects() { //Fifth Method
    const response = await fetch(this.baseUrl);
    return response;
  }
}
