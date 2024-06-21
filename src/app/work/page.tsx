"use client";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import { Description } from "./pages/Description";

export default function Work() {
  return (
    <div className=" h-screen background-animation overflow-y-scroll">
      <NavBar />
      <div>
        <Description />
      </div>
      <Footer />
    </div>
  );
}
