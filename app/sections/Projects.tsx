"use client";

import grainImage from "@/app/assets/images/grain.jpg";
import SectionHeader from "@/app/components/SectionHeader";
import { portfolioProjects } from "@/app/lib/data";
import { motion } from "framer-motion";
import { ArrowUpRight, BadgeCheck } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// Helper function to get consistent image sizing classes - mobile-first with aspect ratio
const getImageClasses = () => {
  return "w-full aspect-[4/3] object-cover md:aspect-[16/10] lg:aspect-auto lg:h-[320px]";
};

const ProjectCard = ({
  project,
  index,
}: {
  project: (typeof portfolioProjects)[0];
  index: number;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={cardRef}
      className={`project-card sticky ${
        isVisible
          ? "opacity-100 translate-x-0 scale-100"
          : index % 2 === 0
          ? "opacity-0 -translate-x-8 md:-translate-x-32 scale-95"
          : "opacity-0 translate-x-8 md:translate-x-32 scale-95"
      }`}
      style={{
        top: `${index * 20}px`,
        zIndex: portfolioProjects.length - index,
      }}
    >
      <div
        className="project-card-grain"
        style={{ backgroundImage: `url(${grainImage.src})` }}
      ></div>
      <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-8">
        {/* Image - shown first on mobile for visual impact */}
        <div className="relative z-10 -mx-4 -mt-4 mb-5 md:-mx-6 md:-mt-5 md:mb-6 lg:order-2 lg:m-0 lg:-mr-[35%] lg:-mb-6 lg:ml-2 overflow-hidden rounded-b-xl lg:rounded-xl">
          <Image
            src={project.image}
            alt={project.title}
            className={getImageClasses()}
          />
        </div>

        {/* Content */}
        <div className="relative z-20 lg:order-1 lg:flex lg:flex-col lg:justify-center">
          <motion.div
            className="gradient-text-emerald-sky inline-flex font-semibold uppercase tracking-widest text-[11px] md:text-xs gap-2"
            initial={{ opacity: 0, y: -10 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span>{project.company}</span>
            <span>&bull;</span>
            <span>{project.year}</span>
          </motion.div>
          <motion.h3
            className="font-serif text-2xl md:text-2xl lg:text-3xl mt-2 md:mt-3 leading-tight"
            initial={{ opacity: 0, y: -10 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
            transition={{ delay: 0.25, duration: 0.5 }}
          >
            {project.title}
          </motion.h3>
          <hr className="border-t border-white/10 mt-3 md:mt-4 lg:mt-3" />
          <ul className="flex flex-col gap-2 md:gap-2.5 lg:gap-2 mt-3 md:mt-4 lg:mt-3">
            {project.results.map((result, idx) => (
              <motion.li
                key={idx}
                className="flex items-start gap-2.5 text-[15px] md:text-base lg:text-base text-white/75 leading-relaxed"
                initial={{ opacity: 0, x: -20 }}
                animate={
                  isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                }
                transition={{ delay: idx * 0.1 + 0.3, duration: 0.5 }}
              >
                <BadgeCheck className="w-5 h-5 md:w-5 md:h-5 lg:w-6 lg:h-6 shrink-0 mt-0.5" />
                <span>{result.title}</span>
              </motion.li>
            ))}
          </ul>
          <a href={project.link} className="block mt-4 md:mt-5 lg:mt-4">
            <button className="btn-gradient-border group">
              <span className="gradient-text-emerald">View Project</span>
              <ArrowUpRight className="w-4 h-4 text-emerald-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="container py-12 md:py-16 lg:py-16">
      <SectionHeader
        title="Featured Projects"
        eyebrow="Here are some of my recent projects:"
        description="Check out my collection of full-stack projects—complete with rock-solid authentication, AI superpowers, and architectures that won't break when things get real. Built for scale, crafted with care."
      />
      <div className="flex flex-col gap-6 md:gap-10 lg:gap-10 mt-8 md:mt-12 lg:mt-10">
        {portfolioProjects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
