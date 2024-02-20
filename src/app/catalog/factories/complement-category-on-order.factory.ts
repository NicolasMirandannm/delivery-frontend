import {
  ComplementCategoryOnOrder,
  ComplementOrderItem,
  ComplementSize
} from '@/app/models/complement/complement-category-on-order';
import { ProductDetailDto } from '@/app/catalog/types/product-detail-dto';

export class ComplementCategoryOnOrderFactory {
  static createManyBy(productDetails: ProductDetailDto): Array<ComplementCategoryOnOrder> {
    return productDetails?.complementCategories?.map(category => {
      const sizes = category.sizes.map(size =>
         new ComplementSize(size.sizeDescription as string, size.amountAvailableToSelect as number)
      );
      const orderItems = category.complements.map(complement =>
        new ComplementOrderItem(complement as string));

      return new ComplementCategoryOnOrder(category.title as string, sizes, orderItems);
    }) || [];
  }
}