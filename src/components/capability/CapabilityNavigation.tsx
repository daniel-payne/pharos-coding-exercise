import { FC } from "react";

import CapabilityDisplay from "src/components/capability/CapabilityDisplay";

import "./CapabilityNavigation.css";

type Props = {
  options: any[];
  selected: any;

  [key: string]: any;
};

const CapabilityNavigation: FC<Props> = (props) => {
  const { options, selected, onChoose } = props;

  return (
    <div className="CapabilityNavigation">
      {options.map((item: any) => (
        <CapabilityDisplay
          key={item.name}
          capability={item}
          selected={selected}
          onChoose={onChoose}
        />
      ))}
    </div>
  );
};

export default CapabilityNavigation;
