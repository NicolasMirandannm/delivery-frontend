export type ProductDetailDto = {
  productId: string;
  name: string;
  description: string;
  imagePath: string;
  prices: Array<PriceDto>;
  complementCategories: Array<ComplementCategoryDto>;
}

export type PriceDto = {
  sizeDescription: string;
  price: number;
}

export type ComplementCategoryDto = {
  title: string;
  complements: Array<string>;
  sizes: Array<ComplementSizeDto>;
}

export type ComplementSizeDto = {
  sizeDescription: string;
  amountAvailableToSelect: number;
}