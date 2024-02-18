import { Catalog, Product } from '@/app/catalog/types/catalog-types';
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

  public async detailProductById(id: string) {
    // const apiData = await this.apiService.get(`/product/detail/${id}`);
    console.log('requesting product detail by id: ', id);
return { id: id, name: 'product name', description: 'product description', price: 10, sizes: 'P, M, G', image: 'https://via.placeholder.com/150' };
  }
}