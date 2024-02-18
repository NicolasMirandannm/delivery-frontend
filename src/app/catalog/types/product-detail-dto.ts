export type ProductDetailDto = {
  productId: String;
  name: String;
  description: String;
  imagePath: String;
  prices: Array<PriceDto>;
  complementCategories: Array<ComplementCategoryDto>;
}

export type PriceDto = {
  sizeDescription: String;
  price: Number;
}

export type ComplementCategoryDto = {
  title: String;
  complements: Array<String>;
  sizes: Array<ComplementSizeDto>;
}

export type ComplementSizeDto = {
  sizeDescription: String;
  amountAvailableToSelect: Number;
}