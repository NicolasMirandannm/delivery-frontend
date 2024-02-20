export class ApiService {

  private readonly url: string = 'http://localhost:8080';

  public async get(apiRote?: string): Promise<any> {
    const response = await fetch(this.url + apiRote || '/', {
      method: 'GET',
      next: {
        revalidate: 15
      }
    });
    return await response.json();
  }
}