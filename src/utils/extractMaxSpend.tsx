export default function extractMaxSpend(data: any): number {
  return data.reduce(
    (max: number, item: any) => (item.spend < max ? item.spend : max),
    Number.POSITIVE_INFINITY
  );
}
