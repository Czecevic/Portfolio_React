"use client";
import "../globals.css";
import { LifeParcours } from "./components/LifeParcours";
import { NavBar } from "../components/NavBar";
import { Description } from "./components/Description";
import { Footer } from "../components/Footer";

export default function About() {
  return (
    <div className="background-animation overflow-y-scroll">
      <NavBar />
      <div className="flex flex-col items-center gap-10 mt-16">
        <Description />
        <LifeParcours />
      </div>
      <Footer />
    </div>
  );
}
