// TODO Move to env var
const DATA_ENDPOINT = `http://localhost:3000/data`;

const useGetData = (
  setStatus: React.Dispatch<React.SetStateAction<string>>,
  setData: React.Dispatch<React.SetStateAction<never[]>>,
  setCapability: React.Dispatch<React.SetStateAction<null>>,
  setMaxSpend: React.Dispatch<React.SetStateAction<number>>,
  setBottomValue: React.Dispatch<React.SetStateAction<number>>,
  setTopValue: React.Dispatch<React.SetStateAction<number>>
): React.EffectCallback => {
  return () => {
    const fetchData = async () => {
      setStatus("fetching");

      try {
        const response = await fetch(DATA_ENDPOINT);
        const data = await response.json();

        const capability = data && data[0] ? data[0] : null;

        const minSpend: number = data.reduce(
          (max: number, item: any) => (item.spend < max ? item.spend : max),
          Number.POSITIVE_INFINITY
        );

        const maxSpend: number = data.reduce(
          (max: number, item: any) => (item.spend > max ? item.spend : max),
          0
        );

        setData(data);
        setStatus("fetched");
        setCapability(capability);
        setMaxSpend(maxSpend);
        setBottomValue(minSpend);
        setTopValue(maxSpend);
      } catch (error) {
        setData(error.message);
        setStatus("error");
      }
    };

    fetchData();
  };
};

export default useGetData;
