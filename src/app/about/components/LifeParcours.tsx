// 3D
import { Canvas, useFrame } from "@react-three/fiber";

// visual
import { Rat } from "./3DVisual/Robert_the_fat_rat";
import { Book } from "./3DVisual/Book_stack";
import { Before_concert } from "./3DVisual/Before_concert";
import { Computer } from "./3DVisual/Powerbook_180_laptop_computer";

import { useRef, useState } from "react";
import { OrbitControls } from "@react-three/drei";

function Illusatration3D({ id }: { id: number }) {
  const meshref = useRef(null);

  useFrame((state, delta) => {
    if (meshref.current) {
      meshref.current.rotation.y += delta * 1;
    }
  });
  return (
    <mesh ref={meshref}>
      {id == 0 ? (
        <Book />
      ) : id == 1 ? (
        <Before_concert />
      ) : id == 2 ? (
        <Computer />
      ) : (
        <Rat />
      )}
    </mesh>
  );
}

export const LifeParcours = () => {
  const life = [
    {
      title: "2015",
      description:
        "Baccalaureate Science technique de l'ingénieur et du developpement durable (STI2D) obtenu",
      id: 0,
    },
    {
      title: "2015 - 2019",
      description:
        "étudie dans l'école des musiques actuelles du spectale vivant ALTA",
      id: 1,
    },
    {
      title: "2020 - 2021",
      description:
        "Formation Managememnt et développement de projets numériques Matrice",
      id: 2,
    },
    {
      title: "2022 - 2024",
      description:
        "alternance Openclassrooms spécialisé dans le JavaScript React / mentor full stack pour des gens en reconvertion professionnelle",
      id: 3,
    },
    {
      title: "2022 - 2024",
      description:
        "mentor full stack pour des gens en reconvertion professionnelle",
      id: 4,
    },
  ];
  return (
    <div className="flex flex-col w-full">
      {life.map((elemOfLife, index) => {
        return (
          <div key={index} className="flex w-full">
            {/* 3D */}
            <Canvas camera={{ fov: 30 }}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[2, 1, 1]} />
              <Illusatration3D id={elemOfLife.id} />
            </Canvas>
            {/* 3D */}
            <div className="w-full">
              <h1>{elemOfLife.title}</h1>
              <p>{elemOfLife.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
