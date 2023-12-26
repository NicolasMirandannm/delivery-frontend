import axios from 'axios';

export class ApiService {
  private static readonly uri = axios.create({
    baseURL: 'http://localhost:8080'
  })

  public async get(apiRote?: string): Promise<any> {
    const response = await ApiService.uri.get(apiRote || '/');
    return response.data;
  }
}