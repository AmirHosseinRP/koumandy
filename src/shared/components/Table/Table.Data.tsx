"use client";

import clsx from "clsx";
import { motion } from "motion/react";
import { type PropsWithChildren, useMemo } from "react";
import { type Category, getCategory, type Point, type Question } from "~/shared/data/data.types";

interface Props {
  point: Point;
  category: Category;
  data: Question;
  onClick: VoidFunction;
}

const TableData = (props: PropsWithChildren<Props>) => {
  const bg = useMemo(() => {
    switch (props.point) {
      case "200":
        return "bg-sky-600";
      case "400":
        return "bg-sky-700";
      case "600":
        return "bg-sky-800";
      case "800":
        return "bg-sky-900";
      case "1000":
        return "bg-sky-950";
    }
  }, [props.point]);

  const delay = useMemo(() => {
    return (Number(props.point) / 1000 - 0.2 + getCategory(props.category).delay) / 3;
  }, [props.point]);

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3, ease: "easeOut", delay: delay }}
      className={clsx(
        "rounded-2xl flex justify-center items-center text-center py-4.5 px-2 text-3xl cursor-pointer font-extrabold border-2 border-white text-white [text-shadow:2px_2px_3px_black,-2px_2px_3px_black,2px_-2px_3px_black,-2px_-2px_3px_black]",
        bg
      )}
      onClick={props.onClick}
    >
      <span className="translate-y-0.75">{props.children}</span>
    </motion.div>
  );
};

export default TableData;
