import React, { useState } from "react";
import Image from "next/image";
import { ProjectProps } from "@/interface";
import { Carousel } from "@material-tailwind/react";
import "../../globals.css";

export const Projet: React.FunctionComponent<ProjectProps> = ({
  allProjet,
}) => {
  const [popUp, setPopUp] = useState(false);
  const [page, setPage] = useState(0);

  const imageIndex = page % allProjet.length;

  return (
    <div className="relative w-full max-w-7xl mx-auto aspect-auto text-center imageAnimation">
      <Carousel className="rounded-xl" placeholder="projet">
        {allProjet.map((projet, index) => (
          <div key={index} className="relative h-96 w-5/6">
            <button
              onClick={() => {
                setPage(index);
                setPopUp(true);
              }}
            >
              <Image
                src={projet.imgSource.src}
                alt={projet.name}
                className="rounded-lg object-cover"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </button>
          </div>
        ))}
      </Carousel>

      {popUp && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 p-4">
          <div className="relative bg-black p-10 rounded-lg w-full md:w-2/3 lg:w-1/2">
            <button
              className="absolute top-2 right-2 p-2 text-white"
              onClick={() => setPopUp(false)}
            >
              x
            </button>
            <div className="flex flex-col items-center">
              <div className="w-full relative lg:h-96 md:h-56 h-32">
                <Image
                  src={allProjet[imageIndex].imgSource.src}
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
