import { ComplementFields } from '@/app/admin/products/register/components/complements/form/complement-form-types';
import { FieldServingSizeForm } from '@/app/admin/products/register/components/serving-size/serving-size-types';

export type CreationProductFields = {
  image: File;
  name: string;
  description: string;
  productCategoryId: string;
  servingSizes: Array<FieldServingSizeForm>;
  hasActiveComplements: boolean;
  complements: Array<ComplementFields>;
}