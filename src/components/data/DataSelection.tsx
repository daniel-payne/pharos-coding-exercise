import { FC } from "react";

import "./DataSelection.css";

type Props = {
  [key: string]: any;
};

const DataSelection: FC<Props> = (props) => {
  const { children } = props;

  return <div className="DataSelection">{children}</div>;
};

export default DataSelection;
