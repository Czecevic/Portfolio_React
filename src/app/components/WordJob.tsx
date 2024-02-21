import { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";

export const WordJob = () => {
  const tab = ["developpeur", "artiste", "mentor", "passionné"];
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(index + 1);
    }, 2000);

    return () => clearInterval(interval);
  });
  return (
    <section className="absolute top-1/2 text-5xl font-semibold flex">
      <div className="flex gap-3 flex-wrap">
        <h1>Je suis</h1>
        <TextTransition
          springConfig={presets.wobbly}
          className=" text-yellow-400"
        >
          {tab[index % tab.length]}
        </TextTransition>
      </div>
    </section>
  );
};
