import { ApiService } from '@/app/api/ApiService';

export type ProductCategoryType = {
  id: string;
  name: string;
}

export class ProductCategoryApi {
  private readonly tag = 'product-category';
  private readonly apiService = new ApiService();

  public async createCategory(category: string): Promise<void> {
    await this.apiService.post('/product-category', { name: category }, this.tag);
  }

  public async getCategories(): Promise<ProductCategoryType[]> {
    const apiData = await this.apiService.get('/product-category', this.tag);
    return apiData as ProductCategoryType[];
  }
}

const productCategoryApi = new ProductCategoryApi();
export default productCategoryApi;