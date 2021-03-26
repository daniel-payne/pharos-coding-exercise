import { FC, useState, useEffect } from "react";

import ItemSummary from "src/components/item/ItemSummary";

import "./DataDisplay.css";

type Props = {
  data: any[];
  maxSpend: number;
  selected: any;

  [key: string]: any;
};

const DataDisplay: FC<Props> = (props) => {
  const { data, maxSpend, selected } = props;

  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    if (data) {
      const filtered = data
        .filter(
          (item) =>
            item.BCAP3 === selected ||
            item.BCAP2 === selected ||
            item.BCAP1 === selected
        )
        .filter((item) => item.spend <= +maxSpend);

      setFilteredData(filtered);
    }
  }, [data, selected, maxSpend]);

  return (
    <div className="DataDisplay">
      {filteredData.map((item) => (
        <ItemSummary item={item} />
      ))}
    </div>
  );
};

export default DataDisplay;
