"use client";

import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { ContactForm } from "./components/ContactFrom";

export default function Contact() {
  return (
    <div className="text-center background-animation overflow-y-scroll p-0">
      <NavBar />
      <div className="flex flex-col gap-10 px-10 md:px-20 lg:px-40 xl:px-80 mb-48">
        <h1 className=" text-center text-5xl py-10 border-b-4 border-white border-w">
          Contact
        </h1>
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
}
