"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import Modal from "~/shared/components/Modal/Modal";
import Table from "~/shared/components/Table/Table";
import { data } from "~/shared/data/data";
import { type Category, getCategory, type Point, type Question } from "~/shared/data/data.types";

const categories = Object.keys(data) as Category[];
const points = ["200", "400", "600", "800", "1000"] as Point[];

export default function Home() {
  const [questionDialog, setQuestionDialog] = useState<{ data?: Question; isOpen: boolean }>({ isOpen: false });
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);

  return (
    <>
      <Table>
        {categories.map((category, index) => (
          <Table.Header key={category} index={index}>
            {getCategory(category).title}
          </Table.Header>
        ))}

        {points.map(point =>
          categories.map(category => {
            const cell = data[category][point];

            return (
              <Table.Data
                key={category + point}
                point={point}
                category={category}
                data={cell}
                onClick={() => setQuestionDialog({ data: cell, isOpen: true })}
              >
                {cell ? point : ""}
              </Table.Data>
            );
          })
        )}
      </Table>

      <Modal
        isOpen={questionDialog.isOpen}
        onClose={() => {
          setQuestionDialog({ isOpen: false });
          setIsAnswerVisible(false);
        }}
      >
        <div className="flex flex-col gap-6 justify-evenly h-full">
          <p className="text-2xl">{questionDialog.data?.question}</p>

          {questionDialog.data?.options && (
            <div className="flex justify-around items-center">
              {questionDialog.data?.options.map(option => (
                <p className="text-lg" key={option}>
                  {option}
                </p>
              ))}
            </div>
          )}

          {isAnswerVisible ? (
            <AnimatePresence>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                {questionDialog.data?.answer}
              </motion.div>
            </AnimatePresence>
          ) : (
            <button type="button" onClick={() => setIsAnswerVisible(true)}>
              نمایش پاسخ
            </button>
          )}
        </div>
      </Modal>
    </>
  );
}
