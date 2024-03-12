/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { Pie, PieChart, ResponsiveContainer, Cell, Label } from "recharts";
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
      <div className="flex flex-wrap items-center justify-around gap-5">
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
      <div className="w-full border-2"></div>
      <div className="flex items-center justify-center gap-20 w-full">
        <div className="items-center w-1/5">
          <h1 className=" text-xl mb-5">{competences[selectLang].name}</h1>
          <div>{competences[selectLang].font}</div>
        </div>
        <ResponsiveContainer width="25%" aspect={1}>
          <PieChart>
            <Pie
              data={barCompetences}
              dataKey="niveau"
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={60}
              startAngle={90}
              endAngle={450}
              labelLine={false}
            >
              <Label
                value={competences[selectLang].niveau}
                position="center"
                fontSize={20}
                fill="#FFFFFF"
              />
              <Cell fill="#FFFFFF" />
              <Cell fill="transparent"></Cell>
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
