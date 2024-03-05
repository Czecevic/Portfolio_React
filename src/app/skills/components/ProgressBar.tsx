import { useState } from "react";

export const ProgressBar = () => {
  const competences = [
    {
      name: "SQL",
      niveau: 40,
    },
    {
      name: "NoSQL",
      niveau: 70,
    },
    {
      name: "Figma",
      niveau: 60,
    },
    {
      name: "HTML",
      niveau: 90,
    },
    {
      name: "CSS",
      niveau: 80,
    },
    {
      name: "SCSS",
      niveau: 60,
    },
    {
      name: "Typescript / Javascript",
      niveau: 80,
    },
    {
      name: "Python",
      niveau: 70,
    },
    {
      name: "React",
      niveau: 80,
    },
    {
      name: "Next",
      niveau: 70,
    },
    {
      name: "ExpressJS",
      niveau: 70,
    },
  ];
  const [selectLang, setSelectLang] = useState("");
  return (
    <div>
      <div className="flex">
        {competences.map((competenceName, index) => {
          return (
            <div key={index}>
              <button className=" border-2 p-3">{competenceName.name}</button>
            </div>
          );
        })}
      </div>
      <div>
        {competences.map((competence, index) => {
          return (
            <>
              <div className="flex justify-between" key={index}>
                <h1>{competence.name}</h1>
                <h1>{competence.niveau}%</h1>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div
                  className="h-2.5 bg-yellow-700 rounded-s-full"
                  style={{ width: `${competence.niveau}%` }}
                ></div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};
