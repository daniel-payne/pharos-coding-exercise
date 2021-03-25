import { FC } from "react";

import "./DataDisplay.css";

type Props = {
  data: any[];
  maxSpend: number;
  selected: any;

  [key: string]: any;
};

const DataDisplay: FC<Props> = (props) => {
  const { data, maxSpend, selected } = props;

  return (
    <div className="DataDisplay">
      {maxSpend}
      {selected}
    </div>
  );
};

export default DataDisplay;
