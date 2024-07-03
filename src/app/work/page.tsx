"use client";
import { useEffect, useRef } from "react";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import { Description } from "./components/Description";

export default function Work() {
  const descRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (descRef.current) {
      descRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  return (
    <div className="h-screen background-animation overflow-y-scroll">
      <NavBar />
      <div ref={descRef}>
        <Description />
      </div>
      <Footer />
    </div>
  );
}
