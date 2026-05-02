import type { JSX, PropsWithChildren } from "react";
import TableData from "~/shared/components/Table/Table.Data";
import TableHeader from "~/shared/components/Table/Table.Header";

interface CompoundProps {
  Header: typeof TableHeader;
  Data: typeof TableData;
}

interface Props {
  className: string;
}

const BaseTable = (props: PropsWithChildren<Props>) => {
  return <div className="bg-blue-300 grid grid-cols-9 p-4 gap-3">{props.children}</div>;
};

const Table = BaseTable as ((props: PropsWithChildren) => JSX.Element) & CompoundProps;
Table.Header = TableHeader;
Table.Data = TableData;

export default Table;
