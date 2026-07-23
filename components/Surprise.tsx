"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Surprise() {
  const [sent, setSent] = useState(false);

  async function sendAnswer(choice: string) {
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          answer: choice,
          from_name: "Keziah",
          to_email: "reaganpremky055@gmail.com",
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setSent(true);
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-rose-100 to-pink-200 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl rounded-3xl bg-white/80 p-10 text-center shadow-2xl"
      >
        <div className="mb-6 text-6xl">❤️</div>

        <h2 className="text-5xl font-bold text-rose-600">
          One Last Question
        </h2>

        <p className="mt-8 text-xl leading-9 text-gray-700">
          Keziah,
          <br />
          If your heart is still open,
          <br />
          would you be willing to give us another chance
          <br />
          and begin our second chapter together?
        </p>

        {!sent ? (
          <div className="mt-12 flex flex-col justify-center gap-6 md:flex-row">
            <button
              onClick={() => sendAnswer("Yes ❤️")}
              className="rounded-full bg-rose-500 px-10 py-4 text-lg font-semibold text-white shadow-lg transition hover:scale-105 hover:bg-rose-600"
            >
              Yes ❤️
            </button>

            <button
              onClick={() => sendAnswer("I Need More Time 💌")}
              className="rounded-full bg-white px-10 py-4 text-lg font-semibold text-rose-600 shadow-lg transition hover:scale-105"
            >
              I Need More Time 💌
            </button>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-10"
          >
            <p className="text-3xl font-bold text-rose-600">
              ❤️ Thank You ❤️
            </p>

            <p className="mt-4 text-lg text-gray-700">
              Your response has been sent successfully.
            </p>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}