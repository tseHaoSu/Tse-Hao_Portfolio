"use client";
import Card from "@/app/components/Card";
import { Star } from "lucide-react";
import { toolBoxItems } from "@/app/lib/data";
import { motion } from "framer-motion";

export const ToolboxCard = () => {
  // Split tools into two rows
  const midpoint = Math.ceil(toolBoxItems.length / 2);
  const firstRow = toolBoxItems.slice(0, midpoint);
  const secondRow = toolBoxItems.slice(midpoint);

  return (
    <Card className="h-auto md:h-full md:col-span-3 overflow-hidden">
      <div className="flex flex-col relative z-20 h-full">
        <div className="inline-flex items-center gap-2">
          <Star className="w-9 h-9 text-emerald-300" />
          <h3 className="font-serif text-2xl md:text-3xl">My Toolbox</h3>
        </div>
        <p className="text-sm md:text-base text-white/70 mt-2">
          Explore the tools and technologies I use to build amazing
          applications.
        </p>

        <div className="flex flex-col gap-4 mt-10 md:mt-12 -mx-10">
          <div className="overflow-hidden py-1">
            <motion.div
              className="flex gap-2"
              animate={{ x: ["-100%", "0%"] }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              }}
            >
              {/* Duplicate items for seamless loop */}
              {[...firstRow, ...firstRow].map((item, index) => (
                <div
                  key={`${item.title}-${index}`}
                  className="inline-flex items-center gap-1 md:gap-1.5 lg:gap-1.5 py-1 md:py-1.5 lg:py-1.5 px-1.5 md:px-2 lg:px-2 outline outline-2 outline-white/10 rounded-lg text-[10px] md:text-xs lg:text-sm shrink-0"
                >
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    className="w-4 h-4 md:w-5 md:h-5 lg:w-5 lg:h-5"
                    fill={item.customColor ? "#FFFFFF" : `#${item.icon.hex}`}
                  >
                    <path d={item.icon.path} />
                  </svg>
                  <span className="font-semibold">{item.title}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Second row - scrolls to the left */}
          <div className="overflow-hidden py-1">
            <motion.div
              className="flex gap-2"
              animate={{ x: ["0%", "-100%"] }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              }}
            >
              {/* Duplicate items for seamless loop */}
              {[...secondRow, ...secondRow].map((item, index) => (
                <div
                  key={`${item.title}-${index}`}
                  className="inline-flex items-center gap-1 md:gap-1.5 lg:gap-1.5 py-1 md:py-1.5 lg:py-1.5 px-1.5 md:px-2 lg:px-2 outline outline-2 outline-white/10 rounded-lg text-[10px] md:text-xs lg:text-sm shrink-0"
                >
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    className="w-4 h-4 md:w-5 md:h-5 lg:w-5 lg:h-5"
                    fill={item.customColor ? "#FFFFFF" : `#${item.icon.hex}`}
                  >
                    <path d={item.icon.path} />
                  </svg>
                  <span className="font-semibold">{item.title}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </Card>
  );
};
