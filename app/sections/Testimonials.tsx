"use client";
import memojiAvatar1 from "@/app/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/app/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/app/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/app/assets/images/memoji-avatar-4.png";
import Image from "next/image";
import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Alex Turner",
    position: "Marketing Manager @ TechStartups",
    text: "Alex was instrumental in transforming our website into a powerful marketing tool. His attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!",
    avatar: memojiAvatar1,
  },
  {
    name: "Olivia Green",
    position: "Head of Design @ GreenLeaf",
    text: "Working with Alex was a pleasure. His expertise in frontend development brought our designs to life in a way we never imagined. The website has exceeded our expectations.",
    avatar: memojiAvatar2,
  },
  {
    name: "Daniel White",
    position: "CEO @ InnovateCo",
    text: "Alex's ability to create seamless user experiences is unmatched. Our website has seen a significant increase in conversions since launching the new design. We couldn't be happier.",
    avatar: memojiAvatar3,
  },
  {
    name: "Emily Carter",
    position: "Product Manager @ GlobalTech",
    text: "Alex is a true frontend wizard. He took our complex product and transformed it into an intuitive and engaging user interface. We're already seeing positive feedback from our customers.",
    avatar: memojiAvatar4,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const dragX = useMotionValue(0);

  // Calculate the number of pages (showing 2 testimonials at a time)
  const ITEMS_PER_PAGE = 2;
  const totalPages = Math.ceil(testimonials.length / ITEMS_PER_PAGE);

  const onDragEnd = () => {
    const x = dragX.get();

    // Calculate which page to snap to based on drag distance
    const threshold = -25;

    if (x < threshold && currentIndex < totalPages - 1) {
      // Dragged left, go to next page
      setCurrentIndex(currentIndex + 1);
    } else if (x > -threshold && currentIndex > 0) {
      // Dragged right, go to previous page
      setCurrentIndex(currentIndex - 1);
    }

    // Animate back to the current page position
    const targetX = -currentIndex * 100;
    animate(dragX, targetX, {
      type: "spring",
      stiffness: 300,
      damping: 30,
    });
  };

  useEffect(() => {
    // Animate to the current index when it changes
    const targetX = -currentIndex * 100;
    animate(dragX, targetX, {
      type: "spring",
      stiffness: 300,
      damping: 30,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  // Auto-scroll every 3 seconds (pause when hovering)
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        // If we're at the last page, go back to 0, otherwise increment
        if (prevIndex >= totalPages - 1) {
          return 0;
        }
        return prevIndex + 1;
      });
    }, 3000);

    // Clean up interval on unmount
    return () => clearInterval(interval);
  }, [totalPages, isPaused]);

  return (
    <div className="container py-16 md:py-20 lg:py-28">
      <SectionHeader
        title="What Clients Say"
        eyebrow="Testimonials"
        description="Hear from some of the clients I've had the pleasure of working with."
      />

      {/* Mobile: flex-col, Desktop: horizontal carousel */}
      <div className="mt-10 md:mt-16 lg:mt-20">
        {/* Mobile view - stacked */}
        <div className="flex flex-col gap-6 md:hidden">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <Card className="hover:-rotate-3 transition duration-300">
                <div className="flex flex-col gap-4 relative z-20">
                  <div className="flex gap-4 items-center">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="bg-gray-700 rounded-full w-14 h-14 md:w-16 md:h-16 shrink-0"
                    />
                    <div className="flex flex-col">
                      <h3 className="font-semibold text-base md:text-lg">
                        {testimonial.name}
                      </h3>
                      <h4 className="text-sm md:text-base text-white/30">
                        {testimonial.position}
                      </h4>
                    </div>
                  </div>
                  <p className="text-sm md:text-base text-white/80 leading-relaxed">
                    {testimonial.text}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Desktop view - horizontal carousel */}
        <div className="hidden md:block overflow-hidden mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4">
          <motion.div
            className="flex cursor-grab active:cursor-grabbing"
            style={{ x: useTransform(dragX, (value) => `${value}%`) }}
            drag="x"
            dragConstraints={{
              left: -(totalPages - 1) * 100,
              right: 0,
            }}
            onDragEnd={onDragEnd}
            dragElastic={0.1}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="shrink-0 px-4"
                style={{ width: `50%` }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <Card className="hover:-rotate-3 transition duration-300">
                  <div className="flex flex-col gap-4 relative z-20">
                    <div className="flex gap-4 items-center">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="bg-gray-700 rounded-full w-14 h-14 md:w-16 md:h-16 shrink-0"
                      />
                      <div className="flex flex-col">
                        <h3 className="font-semibold text-base md:text-lg">
                          {testimonial.name}
                        </h3>
                        <h4 className="text-sm md:text-base text-white/30">
                          {testimonial.position}
                        </h4>
                      </div>
                    </div>
                    <p className="text-sm md:text-base text-white/80 leading-relaxed">
                      {testimonial.text}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Pagination dots - desktop only */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-white w-8"
                    : "bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
