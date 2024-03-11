import { Catalog, Product } from '@/app/catalog/types/catalog-types';
import { ApiService } from '@/app/api/ApiService';
import { ProductDetailDto } from '@/app/catalog/types/product-detail-dto';
import { CreationProductFields } from '@/app/admin/products/register/creation-form/creation-product-types';

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

  public async createProduct(productDto: CreationProductFields): Promise<void> {
    const productDtoJson: string = JSON.stringify({ ...productDto, image: undefined });
    console.log(productDtoJson);
    // await this.apiService.post('/product', product);
  }
}

const productApi = new ProductApi();
export default productApi;