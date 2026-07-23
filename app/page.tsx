"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Surprise from "@/components/Surprise";

export default function Home() {
  const [opened, setOpened] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-200 via-rose-100 to-pink-300">

      {/* Opening Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6">

        {!opened ? (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-3xl text-center"
          >
            <h1 className="text-6xl font-bold text-rose-600 md:text-7xl">
              A Second Chapter ❤️
            </h1>

            <p className="mt-10 text-2xl text-gray-700">
              Every love story has chapters...
            </p>

            <p className="mt-5 text-xl text-gray-600">
              Some chapters end...
            </p>

            <p className="mt-5 text-xl text-gray-600">
              Others deserve another chance.
            </p>

            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="mt-16 cursor-pointer"
              onClick={() => setOpened(true)}
            >
              <div className="text-[120px]">💌</div>

              <p className="mt-4 font-semibold text-rose-600">
                Click the envelope
              </p>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl rounded-3xl bg-white/80 p-10 shadow-2xl"
          >
            <h2 className="text-center text-5xl font-bold text-rose-600">
              Dear Keziah ❤️
            </h2>

            <p className="mt-10 text-lg leading-9 text-gray-700">
              Some people come into our lives and leave a mark that time cannot erase.

              <br /><br />

              From the moment we completed JHS in 2024 until March 2025,
              we shared a chapter that I will always treasure.

              <br /><br />

              Your kindness, your beauty, your support,
              and the way you cared for me are things
              I still appreciate.

              <br /><br />

              Life does not always go the way we expect.
              Looking back, I know there are things I could
              have handled differently.

              <br /><br />

              But today, I am not here to change the past.
              I am here because I believe what we shared was real.

              <br /><br />

              If your heart is open,
              I would love the chance for us to reconnect,
              talk again, and see if we can write
              a second chapter together.

              <br /><br />

              Whatever your answer is,
              I will always respect you and appreciate
              the place you hold in my heart.

              <br /><br />

              ❤️ Reagan
            </p>

            <div className="mt-16 text-center">
              <a
                href="#question"
                className="inline-block rounded-full bg-rose-500 px-8 py-4 font-semibold text-white transition hover:bg-rose-600"
              >
                Continue ❤️
              </a>
            </div>
          </motion.div>
        )}
      </section>

      {/* Question */}
      <section id="question">
        <Surprise />
      </section>

      {/* Footer */}
      <footer className="border-t border-rose-200 bg-white/50 py-10">
        <div className="mx-auto max-w-4xl px-6 text-center">

          <div className="mb-4 text-4xl">❤️</div>

          <h3 className="text-2xl font-bold text-rose-600">
            Thank You
          </h3>

          <p className="mt-4 text-gray-700">
            Thank you for taking the time to visit this little corner of my heart.
          </p>

          <p className="mt-3 text-gray-700">
            No matter what your decision is,
            I truly wish you happiness, peace, and success.
          </p>

          <p className="mt-8 text-sm text-gray-500">
            Made with ❤️ by Reagan
          </p>

        </div>
      </footer>

    </main>
  );
}