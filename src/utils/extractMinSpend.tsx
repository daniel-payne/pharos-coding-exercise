export default function extractMinSpend(data: any): number {
  return data.reduce(
    (max: number, item: any) => (item.spend > max ? item.spend : max),
    0
  );
}
