export type TabOfSizes = {
  key: string;
  label: string;
  servingSizeProps: FieldServingSizeForm;
}

export type FieldServingSizeForm = {
  name: string;
  description: string;
  price: number;
}
