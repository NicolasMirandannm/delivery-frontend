import { Catalog, Product } from '@/app/catalog/types/CatalogTypes';
import { ApiService } from '@/app/api/ApiService';

export class ProductApi {
  private readonly apiService = new ApiService();
  public async getCatalog(): Promise<Catalog[]> {
    const apiData = await this.apiService.get('/catalog');
    return apiData?.map((catalog: any): Catalog => {
      return {
        categoryId: catalog.categoryId,
        categoryName: catalog.categoryName,
        products: catalog.products.map((product: any): Product => ({
          id: product.id,
          name: product.name,
          description: product.description,
          price: product.price,
          sizes: product.sizes,
          image: product.image,
        }))
      }
    });
  }
}