import { Catalog, Product } from '@/app/catalog/types/catalog-types';
import { ApiService } from '@/app/api/ApiService';
import { ProductDetailDto } from '@/app/catalog/types/product-detail-dto';

export class ProductApi {
  private readonly apiService = new ApiService();

  public async getCatalog(): Promise<Catalog[]> {
    const apiData = await this.apiService.get('/product-catalog');
    return apiData as Catalog[];
  }

  public async getProductDetailsBy(id: string): Promise<ProductDetailDto> {
    const apiData = await this.apiService.get(`/product/detail/${id}`);
    return apiData as ProductDetailDto;
  }
}

const productApi = new ProductApi();
export default productApi;