import { FC } from "react";

import "./ItemSummary.css";

type Props = {
  item: any;

  [key: string]: any;
};

const ItemSummary: FC<Props> = (props) => {
  const { item } = props;

  return (
    <div className="ItemSummary">
      <p>{item.name}</p>
      <p>Total Spend ${item.spend.toLocaleString()}</p>
    </div>
  );
};

export default ItemSummary;
