"use client";

import { motion } from "motion/react";
import { type PropsWithChildren, useMemo } from "react";

interface Props {
  index: number;
}

const TableHeader = (props: PropsWithChildren<Props>) => {
  const delay = useMemo(() => {
    return props.index / 30;
  }, [props.index]);

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3, ease: "easeOut", delay: delay }}
      className="bg-violet-600 px-2 py-2 flex justify-center items-center text-center text-lg border-2 border-black font-bold text-white [text-shadow:1px_1px_3px_black,-1px_1px_3px_black,1px_-1px_3px_black,-1px_-1px_3px_black] rounded-2xl"
    >
      {props.children}
    </motion.div>
  );
};

export default TableHeader;
