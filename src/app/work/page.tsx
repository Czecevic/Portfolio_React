"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { BoxComponents } from "../about/components/BoxComponents";
import { NavBar } from "../components/NavBar";

export default function Work() {
  return (
    <div className=" h-screen bg-black">
      <NavBar />
      <BoxComponents />
    </div>
  );
}
