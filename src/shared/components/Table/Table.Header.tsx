import type { PropsWithChildren } from "react";

const TableHeader = (props: PropsWithChildren) => {
  return (
    <div className="bg-purple-500 px-5 py-2 flex justify-center items-center text-center text-xl font-bold text-wite text-shadow-[0_0_5px_black]">
      {props.children}
    </div>
  );
};

export default TableHeader;
