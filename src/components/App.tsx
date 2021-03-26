import { FC, useState, useEffect } from "react";

import DataSelection from "src/components/data/DataSelection";
import DataDisplay from "src/components/data/DataDisplay";
import CapabilitySelection from "src/components/capability/CapabilitySelection";
import SpendSelection from "src/components/spend/SpendSelection";

import useFetch from "src/hooks/useFetch";

import extractNavigation from "src/utils/extractNavigation";
import extractMaxSpend from "src/utils/extractMaxSpend";
import extractMinSpend from "src/utils/extractMinSpend";

import "./App.css";

type Props = {
  [key: string]: any;
};

const App: FC<Props> = () => {
  const [capability, setCapability] = useState(null);
  const [maxSpend, setMaxSpend] = useState(Number.POSITIVE_INFINITY);
  const [bottomValue, setBottomValue] = useState(0);
  const [topValue, setTopValue] = useState(Number.POSITIVE_INFINITY);
  const [navigation, setNavigation] = useState(Array);

  const { data, loading, error } = useFetch("http://localhost:3000/data");

  // // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (data) {
      const minSpend: number = extractMaxSpend(data);
      const maxSpend: number = extractMinSpend(data);

      const navigation = extractNavigation(data);

      const firstCapability = navigation[0]?.name;

      setCapability(firstCapability);
      setMaxSpend(maxSpend);
      setBottomValue(minSpend);
      setTopValue(maxSpend);
      setNavigation(navigation);
    }
  }, [data]);

  if (loading) return <div>fetching...</div>;
  if (error) return <div>error... {error}</div>;

  const handleChoose = (newCapability: any) => {
    setCapability(newCapability);
  };

  return (
    <div className="App">
      <DataSelection>
        <CapabilitySelection
          options={navigation}
          selected={capability}
          onChoose={handleChoose}
        ></CapabilitySelection>
        <SpendSelection
          maxSpend={maxSpend}
          topValue={topValue}
          bottomValue={bottomValue}
          onChange={setMaxSpend}
        ></SpendSelection>
      </DataSelection>

      <DataDisplay
        data={data}
        maxSpend={maxSpend}
        selected={capability}
      ></DataDisplay>
    </div>
  );
};

export default App;
