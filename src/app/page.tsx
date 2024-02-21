"use client";
import { NavBar } from "./components/NavBar";
import Image from "next/image";
import myFace from "@/assets/charles2.png";
import { WordJob } from "./components/WordJob";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Image
        src={myFace}
        alt="myFace"
        className=" h-screen object-cover"
      ></Image>
      <WordJob></WordJob>
    </main>
  );
}
