export type Product = {
  id: string,
  name: string,
  description: string,
  servingSizes: CatalogProductServingSize[],
  imageURI: string;
}

export type CatalogProductServingSize = {
  name: string,
  price: number
}

export type Catalog = {
  categoryId: string,
  categoryName: string,
  products: Product[]
}