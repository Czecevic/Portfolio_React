"use client";
import React, { useRef, useState, FormEvent } from "react";

export const ContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState<string>("");

  const sendEmail = async (e: FormEvent) => {
    e.preventDefault();
    try {
      if (!form.current) return;

      const formData = new FormData(form.current);
      const data = Object.fromEntries(formData.entries());

      const response = await fetch("../../api/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("Email sent successfully!");
        form.current.reset();
      } else {
        setStatus("Failed to send email.");
      }
    } catch (error) {
      setStatus("An error occurred.");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Contact Us</h1>
      <form onSubmit={sendEmail} ref={form} className="space-y-4">
        <div className="flex flex-col md:flex-row md:space-x-4">
          <div className="flex flex-col flex-1 mb-4 md:mb-0">
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
          <div className="flex flex-col flex-1">
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
          className="bg-black w-full text-white p-2 rounded-md cursor-pointer"
        />
      </form>
      {status && <p className="mt-4 text-center">{status}</p>}
    </div>
  );
};
