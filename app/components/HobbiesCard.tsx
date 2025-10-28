"use client";

import Card from "@/app/components/Card";
import { Sparkles } from "lucide-react";
import { hobbies } from "@/app/lib/data";
import { motion } from "framer-motion";

export const HobbiesCard = () => {
  return (
    <Card className="h-auto md:h-full md:col-span-3">
      <div className="flex flex-col relative z-20">
        <div className="inline-flex items-center gap-2">
          <Sparkles className="w-9 h-9 text-emerald-300" />
          <h3 className="font-serif text-2xl md:text-3xl">Beyond the Code</h3>
        </div>
        <p className="text-sm md:text-base text-white/70 mt-2">
          My interests and hobbies outside of programming.
        </p>
      </div>
      <div className="relative h-64 md:h-80 mt-8 md:mt-6">
        {hobbies.map((hobby, index) => (
          <motion.div
            key={hobby.title}
            className="inline-flex items-center gap-1.5 md:gap-2 py-1.5 md:py-2 px-2 md:px-3 bg-linear-to-r from-emerald-500 to-sky-400 rounded-full text-xs md:text-sm lg:text-base absolute cursor-pointer"
            style={{
              left: hobby.left,
              top: hobby.top,
            }}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            animate={{
              y: [0, -8, 0],
            }}
            whileHover={{
              scale: 1.1,
              rotate: [0, -3, 3, 0],
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.95 }}
            transition={{
              opacity: { delay: index * 0.1, duration: 0.5 },
              scale: {
                delay: index * 0.1,
                duration: 0.5,
                type: "spring",
                stiffness: 200,
                damping: 10,
              },
              y: {
                duration: 2 + index * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          >
            <span className="text-2xl md:text-3xl">{hobby.emoji}</span>
            <span className="font-semibold">{hobby.title}</span>
          </motion.div>
        ))}
      </div>
    </Card>
  );
};
