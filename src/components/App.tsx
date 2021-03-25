import { FC, useState, useEffect } from "react";

import "./App.css";

import DataSelection from "src/components/data/DataSelection";
import DataDisplay from "src/components/data/DataDisplay";
import CapabilitySelection from "src/components/capability/CapabilitySelection";
import SpendSelection from "src/components/spend/SpendSelection";

import useGetData from "src/hooks/useGetData";

type Props = {
  [key: string]: any;
};

const App: FC<Props> = () => {
  const [status, setStatus] = useState("idle");
  const [data, setData] = useState([]);

  const [capability, setCapability] = useState(null);
  const [maxSpend, setMaxSpend] = useState(Number.POSITIVE_INFINITY);
  const [bottomValue, setBottomValue] = useState(0);
  const [topValue, setTopValue] = useState(Number.POSITIVE_INFINITY);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(
    useGetData(
      setStatus,
      setData,
      setCapability,
      setMaxSpend,
      setBottomValue,
      setTopValue
    ),
    []
  );

  if (status === "fetching") return <div>fetching...</div>;
  if (status === "error") return <div>error... {data}</div>;

  return (
    <div className="App">
      <DataSelection>
        <CapabilitySelection
          data={data}
          capability={capability}
        ></CapabilitySelection>
        <SpendSelection
          maxSpend={maxSpend}
          topValue={topValue}
          bottomValue={bottomValue}
          onChange={setMaxSpend}
        ></SpendSelection>
      </DataSelection>

      <DataDisplay data={data} maxSpend={maxSpend} capability={capability}>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </DataDisplay>
    </div>
  );
};

export default App;
