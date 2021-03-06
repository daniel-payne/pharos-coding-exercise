import { FC } from "react";

import CapabilityDisplay from "src/components/capability/CapabilityDisplay";

import "./CapabilitySelection.css";

type Props = {
  options: any[];
  selected: any;

  [key: string]: any;
};

const CapabilitySelection: FC<Props> = (props) => {
  const { options, selected, onChoose } = props;

  return (
    <div className="CapabilitySelection">
      <h4>Navigation</h4>

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

export default CapabilitySelection;
