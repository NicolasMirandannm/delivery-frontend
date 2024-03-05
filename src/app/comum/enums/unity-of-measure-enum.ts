export enum UnityOfMeasureEnum {
  gramas = 'G',
  kilos = 'KG',
  mililitros = 'ML',
  litros = 'L',
}

export function obterOpcoesUnidadeMedida() {
  return Object.keys(UnityOfMeasureEnum).map((key) => {
    return {
      label: key,
      value: UnityOfMeasureEnum[key as keyof typeof UnityOfMeasureEnum]
    }
  });
}