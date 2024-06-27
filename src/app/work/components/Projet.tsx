import React, { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, wrap } from "framer-motion";
import { ProjectProps } from "@/interface";

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export const Projet: React.FunctionComponent<ProjectProps> = ({
  allProjet,
}) => {
  const [popUp, setPopUp] = useState(false);
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = wrap(0, allProjet.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto aspect-auto text-center">
      <button className="w-3/4" onClick={() => setPopUp(true)}>
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.img
            key={allProjet[imageIndex].imgSource.src}
            src={allProjet[imageIndex].imgSource.src}
            initial="enter"
            animate="center"
            className="rounded-lg"
            exit="exit"
            custom={direction}
            variants={variants}
            transition={{
              x: {
                type: "spring",
                stiffness: 300,
                damping: 30,
              },
              opacity: { duration: 0.5 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            style={{
              width: "100%",
              top: 0,
              left: 0,
            }}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
          />
        </AnimatePresence>
      </button>
      <motion.div
        className="absolute top-[calc(50%-20px)] text-black right-3 bg-white rounded-full w-10 h-10 flex justify-center items-center select-none cursor-pointer font-bold text-lg z-20"
        onClick={() => paginate(1)}
        whileHover={{ scale: 1.2 }}
      >
        {">"}
      </motion.div>
      <motion.div
        className="absolute top-[calc(50%-20px)] text-black left-3 bg-white rounded-full w-10 h-10 flex justify-center items-center select-none cursor-pointer font-bold text-lg z-20"
        onClick={() => paginate(-1)}
        whileHover={{ scale: 1.2 }}
      >
        {"<"}
      </motion.div>

      {popUp && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="relative bg-black p-10 rounded-lg w-2/3">
            <button
              className="absolute top-2 right-2 p-2 text-white"
              onClick={() => setPopUp(false)}
            >
              x
            </button>
            <div className="flex flex-col items-center">
              <div className=" w-full relative lg:h-96 md:h-56 sm:h-16">
                <Image
                  src={allProjet[imageIndex].imgSource}
                  alt={allProjet[imageIndex].name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <div className="w-full mt-4 text-center">
                <h2 className="text-2xl font-bold text-white">
                  {allProjet[imageIndex].name}
                </h2>
                <p className="mt-2 text-gray-300 text-sm sm:text-xs lg:text-sm">
                  {allProjet[imageIndex].desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
