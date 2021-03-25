import { FC, useState, useEffect } from "react";

import "./App.css";

import DataSelection from "src/components/data/DataSelection";
import DataDisplay from "src/components/data/DataDisplay";
import CapabilitySelection from "src/components/capability/CapabilitySelection";
import SpendSelection from "src/components/spend/SpendSelection";

import useFetch from "src/hooks/useFetch";

type Props = {
  [key: string]: any;
};

function nameSort(a: any, b: any) {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
}

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
      const minSpend: number = data.reduce(
        (max: number, item: any) => (item.spend < max ? item.spend : max),
        Number.POSITIVE_INFINITY
      );

      const maxSpend: number = data.reduce(
        (max: number, item: any) => (item.spend > max ? item.spend : max),
        0
      );

      const level1: any[] = data.reduce((list: any[], item: any) => {
        let found = list.find((match: any) => match.name === item.BCAP1);

        if (!found) {
          return [...list, { name: item.BCAP1 }];
        }

        return list;
      }, []);

      const level2: any[] = data.reduce((list: any[], item: any) => {
        let found = list.find((match: any) => match.name === item.BCAP2);

        if (!found) {
          return [...list, { name: item.BCAP2 }];
        }

        return list;
      }, []);

      const level3: any[] = data.reduce((list: any[], item: any) => {
        let found = list.find((match: any) => match.name === item.BCAP3);

        if (!found) {
          return [...list, { name: item.BCAP3 }];
        }

        return list;
      }, []);

      level1.sort(nameSort);
      level2.sort(nameSort);
      level3.sort(nameSort);

      const navigation2 = level2.map((item: any) => {
        item.navigation = level3.filter((match) =>
          match.name.includes(item.name)
        );

        return item;
      });

      const navigation1 = level1.map((item: any) => {
        item.navigation = navigation2.filter((match) =>
          match.name.includes(item.name)
        );

        return item;
      });

      const firstCapability = level1[0]?.name;

      setCapability(firstCapability);
      setMaxSpend(maxSpend);
      setBottomValue(minSpend);
      setTopValue(maxSpend);
      setNavigation(navigation1);
    }
  }, [data]);

  if (loading) return <div>fetching...</div>;
  if (error) return <div>error... {error}</div>;

  const handelChoose = (newCapability: any) => {
    setCapability(newCapability);
  };

  return (
    <div className="App">
      <DataSelection>
        <CapabilitySelection
          options={navigation}
          selected={capability}
          onChoose={handelChoose}
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
