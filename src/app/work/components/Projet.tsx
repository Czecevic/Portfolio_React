import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

interface ProjectProps {
  allProjet: {
    name: string;
    imgSource: StaticImageData;
    desc: string;
  }[];
}

export const Projet: React.FunctionComponent<ProjectProps> = ({
  allProjet,
}) => {
  const [ImageIndex, setImageIndex] = useState(0);
  const [popUp, setPopUp] = useState(false);

  const showPrevImage = () => {
    if (ImageIndex > 0) {
      setImageIndex(ImageIndex - 1);
    } else {
      setImageIndex(allProjet.length - 1);
    }
  };

  const showNextImage = () => {
    if (ImageIndex < allProjet.length - 1) {
      setImageIndex(ImageIndex + 1);
    } else {
      setImageIndex(0);
    }
  };

  return (
    <div className="relative w-full max-w-7xl m-0 aspect-auto">
      <button className="w-full" onClick={() => setPopUp(true)}>
        <Image
          src={allProjet[ImageIndex].imgSource}
          alt={allProjet[ImageIndex].name}
          className="object-cover w-full h-full block"
        />
      </button>
      <button
        className="block absolute top-0 bottom-0 p-4 cursor-pointer"
        onClick={showPrevImage}
      >
        <ArrowBigLeft />
      </button>
      <button
        className="block absolute top-0 right-0 bottom-0 p-4 cursor-pointer"
        onClick={showNextImage}
      >
        <ArrowBigRight />
      </button>

      {popUp && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="relative bg-white p-8 rounded-lg max-w-2xl w-full">
            <button
              className="absolute top-2 right-2 p-2 text-black"
              onClick={() => setPopUp(false)}
            >
              x
            </button>
            <div className="w-full h-96 relative">
              <Image
                src={allProjet[ImageIndex].imgSource}
                alt={allProjet[ImageIndex].name}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="mt-4 text-center">
              <h2 className="text-2xl font-bold">
                {allProjet[ImageIndex].name}
              </h2>
              <p className="mt-2 text-gray-700 text-sm">
                {allProjet[ImageIndex].desc}
              </p>
            </div>
            <div className="flex justify-between mt-4">
              <button className="p-2 text-black" onClick={showPrevImage}>
                <ArrowBigLeft />
              </button>
              <button className="p-2 text-black" onClick={showNextImage}>
                <ArrowBigRight />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
