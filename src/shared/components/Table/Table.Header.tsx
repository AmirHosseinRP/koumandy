import type { PropsWithChildren } from "react";

const TableHeader = (props: PropsWithChildren) => {
  return <div className="bg-red-300">{props.children}</div>;
};

export default TableHeader;
