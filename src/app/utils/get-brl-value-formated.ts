export default function getBRLValueFormated(value: number | undefined): string {
  if (value == undefined) return 'error';
  return value.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
};