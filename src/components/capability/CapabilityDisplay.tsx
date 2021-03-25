import { FC } from "react";

import CapabilityNavigation from "src/components/capability/CapabilityNavigation";

import "./CapabilityDisplay.css";

type Props = {
  capability: any;
  selected: any;

  [key: string]: any;
};

const CapabilityDisplay: FC<Props> = (props) => {
  const { capability, selected, onChoose } = props;

  const selectedStyle =
    selected === capability.name ? { backgroundColor: "grey" } : {};

  const handleChoose = () => {
    onChoose(capability.name);
  };

  return (
    <div className="CapabilityDisplay">
      <p style={selectedStyle} onClick={handleChoose}>
        {capability.name}
      </p>

      {capability.navigation && (
        <div style={{ paddingLeft: 16 }}>
          <CapabilityNavigation
            options={capability.navigation}
            selected={selected}
            onChoose={onChoose}
          ></CapabilityNavigation>
        </div>
      )}
    </div>
  );
};

export default CapabilityDisplay;
