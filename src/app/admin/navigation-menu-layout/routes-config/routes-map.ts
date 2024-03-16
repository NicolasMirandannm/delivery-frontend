type Route = {
  readonly label: string;
  readonly path: string;
}

export enum AdminRouteKeys {
  HOME = 'home',
  PRODUCTS = 'products',
}

export const adminRoutesMap = new Map<string, Route>(
  [
    [AdminRouteKeys.HOME, { label: 'Home', path: '/admin/home' }],
    [AdminRouteKeys.PRODUCTS, { label: 'Produtos', path: '/admin/products/register' }],
  ]
);