export class ApiService {

  private readonly url: string = 'http://localhost:8080';

  public async get(apiRote?: string, tag?: string): Promise<any> {
    const response = await fetch(this.url + apiRote || '/', {
      method: 'GET',
      next: (tag != undefined ? { tags: [tag], revalidate: 15 } : { revalidate: 15})
    });
    return await response.json();
  }

  public async post(apiRoute: string, data: any, tag?: string): Promise<void> {
    await fetch(this.url + apiRoute, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      },
      next: (tag != undefined ? { tags: [tag], revalidate: 15 } : { revalidate: 15})
    });
  }
}