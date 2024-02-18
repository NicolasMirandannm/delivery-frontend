export type Product = {
  id: string,
  name: string,
  description: string,
  price: number,
  sizes: string[],
  image: string;
}

export type Catalog = {
  categoryId: string,
  categoryName: string,
  products: Product[]

}