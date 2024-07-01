import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const ContactForm = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState("");
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_kbi87hb",
          "template_ggw1zwn",
          form.current,
          process.env.NEXT_PUBLIC_EMAILJS_USER_ID
        )
        .then(
          (result) => {
            console.log(result.text);
            setStatus("Message sent successfully!");
          },
          (error) => {
            console.log(error.text);
            setStatus("Failed to send message. Please try again.");
          }
        );
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
      <form onSubmit={sendEmail} ref={form} className="space-y-4">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <label htmlFor="user_name" className="block text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              name="user_name"
              required
              className="mt-1 block w-full p-2 border bg-transparent border-gray-300 rounded-md"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="user_email" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              name="user_email"
              required
              className="mt-1 block w-full p-2 border bg-transparent border-gray-300 rounded-md"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="message" className="block text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            className="mt-1 block w-full p-2 border bg-transparent border-gray-300 rounded-md"
            rows={5}
          />
        </div>
        <input
          type="submit"
          value="Send"
          className=" bg-black w-full text-white p-2 rounded-md cursor-pointer"
        />
      </form>
      {status && <p className="mt-4">{status}</p>}
    </div>
  );
};
