import type { PropsWithChildren } from "react";

const TableData = (props: PropsWithChildren) => {
  return <div className="bg-green-300">{props.children}</div>;
};

export default TableData;
