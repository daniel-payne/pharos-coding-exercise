import { FC } from "react";

import "./DataDisplay.css";

type Props = {
  [key: string]: any;
};

const DataDisplay: FC<Props> = (props) => {
  const { children } = props;

  return <div className="DataDisplay">{children}</div>;
};

export default DataDisplay;
