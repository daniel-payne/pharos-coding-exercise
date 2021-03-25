import { FC } from "react";

import CapabilityDisplay from "src/components/capability/CapabilityDisplay";

import "./CapabilitySelection.css";

type Props = {
  data: any[];
  capability: any;

  [key: string]: any;
};

const CapabilitySelection: FC<Props> = (props) => {
  const { data } = props;

  const topLevelCapabilities = data.reduce((list, application) => {
    let found = list.find((item: any) => item.name === application.BCAP1);

    if (!found) {
      return [...list, { name: application.BCAP1, data }];
    }

    return list;
  }, []);

  topLevelCapabilities.sort(function (a: any, b: any) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

  return (
    <div className="CapabilitySelection">
      <h4>Navigation</h4>

      {topLevelCapabilities.map((item: any) => (
        <CapabilityDisplay key={item.name} capability={item} data={data} />
      ))}
    </div>
  );
};

export default CapabilitySelection;
