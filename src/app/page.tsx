"use client";
import { NavBar } from "./components/NavBar";
import Image from "next/image";
import myFace from "@/assets/charles2.png";
import { WordJob } from "./components/WordJob";
import Head from "next/head";

export default function Home() {
  return (
    <main>
      <Head>
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <NavBar />
      <Image
        src={myFace}
        alt="myFace"
        className="h-screen object-cover"
      ></Image>
      <WordJob></WordJob>
    </main>
  );
}
