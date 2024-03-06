import { UnityOfMeasureEnum } from '@/app/comum/enums/unity-of-measure-enum';

export type AmountBySizeForm = {
  sizeDescription: string;
  amountAvailableToCustumer: number;
}

export type ComplementaryItemForm = {
  name: string;
  measureType: UnityOfMeasureEnum;
  amountOfMeasure: number;
}

export type ComplementFields = {
  categoryName: string;
  amountBySize: Array<AmountBySizeForm>;
  complementaryItems: Array<ComplementaryItemForm>
}