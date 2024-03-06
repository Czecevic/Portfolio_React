"use client";

import { NavBar } from "../components/NavBar";
import { ProgressBar } from "./components/ProgressBar";
import { Footer } from "../components/Footer";

export default function Skills() {
  return (
    <div className="text-center bg-blue-gray-500 overflow-y-scroll">
      <NavBar />
      <div className="px-48 flex flex-col gap-10">
        <h1 className=" text-center text-5xl py-10 border-b-4 border-white border-w">
          Mes competences
        </h1>
        <p>
          Fort d&apos;une expérience dans la restauration et dans la musique,
          j&apos;ai pu développer des savoir-être solides en communication
          interpersonnelle et en gestion d&apos;équipe.
        </p>
        <ProgressBar />
      </div>
      <Footer />
    </div>
  );
}
