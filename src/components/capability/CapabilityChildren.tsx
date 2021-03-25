import { FC } from "react";

import "./CapabilityChildren.css";

type Props = {
  // capability: any;

  [key: string]: any;
};

const CapabilityChildren: FC<Props> = (props) => {
  const { capability } = props;

  return <div className="CapabilityChildren"></div>;
};

export default CapabilityChildren;
