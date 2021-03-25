import { FC } from "react";

import CapabilityChildren from "src/components/capability/CapabilityChildren";

import "./CapabilityDisplay.css";

type Props = {
  capability: any;

  [key: string]: any;
};

const CapabilityDisplay: FC<Props> = (props) => {
  const { capability } = props;

  return (
    <div className="CapabilityDisplay">
      {capability.name}

      <CapabilityChildren />
    </div>
  );
};

export default CapabilityDisplay;
