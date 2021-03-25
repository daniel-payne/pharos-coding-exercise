import { FC, Dispatch, SetStateAction } from "react";

import "./SpendSelection.css";

type Props = {
  maxSpend: number;
  bottomValue: number;
  topValue: number;

  onChange: Dispatch<SetStateAction<number>>;

  [key: string]: any;
};

const SpendSelection: FC<Props> = (props) => {
  const { maxSpend, bottomValue, topValue, onChange } = props;

  const displaySpend = (+maxSpend).toLocaleString();

  const handleChange = (event: any) => {
    onChange(event.target.value);
  };

  return (
    <div className="SpendSelection">
      <h4>Filters</h4>
      <p>Spending ${displaySpend}</p>
      <input
        type="range"
        min={bottomValue}
        max={topValue}
        value={maxSpend}
        onChange={handleChange}
      ></input>
      <div className="display__float-left">${bottomValue.toLocaleString()}</div>
      <div className="display__float-right">${topValue.toLocaleString()}</div>
    </div>
  );
};

export default SpendSelection;
