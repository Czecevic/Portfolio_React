/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { Pie, PieChart, ResponsiveContainer, Cell } from "recharts";
import { useState } from "react";
import Image from "next/image";
import mongoDB from "@/assets/imageLangage/leaf.png";
import SQL from "@/assets/imageLangage/SQl.png";
import figma from "@/assets/imageLangage/figma.png";
import HTML from "@/assets/imageLangage/html-5.png";
import CSS from "@/assets/imageLangage/css-3.png";
import SCSS from "@/assets/imageLangage/sass.png";
import JS from "@/assets/imageLangage/js.png";
import TS from "@/assets/imageLangage/typescript.png";
import Python from "@/assets/imageLangage/python.png";
import React from "@/assets/imageLangage/science.png";
import NextJS from "@/assets/imageLangage/next-js.svg";
import NodeJs from "@/assets/imageLangage/nodejs.png";

export const ProgressBar = () => {
  const competences = [
    {
      name: "SQL",
      niveau: 60,
      font: <Image src={SQL} alt="SQL"></Image>,
    },
    {
      name: "NoSQL",
      niveau: 80,
      font: <Image src={mongoDB} alt="mongoDb"></Image>,
    },
    {
      name: "Figma",
      niveau: 70,
      font: <Image src={figma} alt="figma"></Image>,
    },
    {
      name: "HTML",
      niveau: 90,
      font: <Image src={HTML} alt="HTML"></Image>,
    },
    {
      name: "CSS",
      niveau: 80,
      font: <Image src={CSS} alt="CSS"></Image>,
    },
    {
      name: "SCSS",
      niveau: 70,
      font: <Image src={SCSS} alt="SCSS"></Image>,
    },
    {
      name: "TS",
      niveau: 75,
      font: <Image src={TS} alt="TS"></Image>,
    },
    {
      name: "JS",
      niveau: 85,
      font: <Image src={JS} alt="JS"></Image>,
    },
    {
      name: "Python",
      niveau: 70,
      font: <Image src={Python} alt="python"></Image>,
    },
    {
      name: "React",
      niveau: 80,
      font: <Image src={React} alt="react"></Image>,
    },
    {
      name: "Next",
      niveau: 70,
      font: <Image src={NextJS} alt="NextJS"></Image>,
    },
    {
      name: "NodeJS",
      niveau: 65,
      font: <Image src={NodeJs} alt="nodeJS"></Image>,
    },
  ];
  const [selectLang, setSelectLang] = useState(0);
  const barCompetences = [
    {
      niveau: competences[selectLang].niveau,
    },
    {
      niveau: 100 - competences[selectLang].niveau,
    },
  ];
  return (
    <div className="flex w-full flex-col items-center gap-10">
      <div className="flex flex-wrap items-center justify-around gap-5 px-40">
        {competences.map((competenceName, index) => {
          return (
            <div key={index} className="w-1/6">
              <button
                className="transition-all ease-in-out p-3 flex flex-col justify-between items-center w-full hover:scale-125"
                onClick={() => setSelectLang(index)}
              >
                {competenceName.font}
                {competenceName.name}
              </button>
            </div>
          );
        })}
      </div>
      <div className="flex justify-between items-center w-full">
        <div className=" w-1/4 h-full text-5xl">
          {competences[selectLang].font}
          <div className="items-center">
            {/* <h1>{competences[selectLang].name}</h1> */}
            <h1>{competences[selectLang].niveau}%</h1>
          </div>
        </div>
        <ResponsiveContainer width="50%" aspect={1}>
          <PieChart>
            <Pie
              data={barCompetences}
              dataKey="niveau"
              cx="50%"
              cy="50%"
              innerRadius={125}
              outerRadius={150}
              startAngle={90}
              endAngle={450}
            >
              <Cell fill="#d1b202" />
              <Cell fill="transparent"></Cell>
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
