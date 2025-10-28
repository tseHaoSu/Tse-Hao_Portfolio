"use client";

import { StarIcon } from "lucide-react";
import { motion } from "framer-motion";

const words = [
  "Creative",
  "Collaborative",
  "Detail-Oriented",
  "Problem-Solver",
  "Curious",
  "Adaptable",
  "Innovative",
  "Team Player",
  "Dedicated",
  "Passionate",
];

const Tape = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 overflow-x-clip py-3 -rotate-3 -mx-1">
        <motion.div
          className="flex gap-4"
          animate={{
            x: [0, -1000],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {[...words, ...words, ...words].map((word, index) => (
            <div
              key={`${word}-${index}`}
              className="inline-flex gap-4 items-center shrink-0"
            >
              <span className="uppercase text-gray-900 font-extrabold text-sm items-center">
                {word}
              </span>
              <StarIcon className="w-5 h-5 text-gray-900 -rotate-12" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Tape;
