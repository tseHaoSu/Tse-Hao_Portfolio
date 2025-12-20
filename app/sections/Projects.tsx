"use client";

import grainImage from "@/app/assets/images/grain.jpg";
import SectionHeader from "@/app/components/SectionHeader";
import { portfolioProjects } from "@/app/lib/data";
import { motion } from "framer-motion";
import { ArrowUpRight, BadgeCheck } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

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
      className={`project-card group h-full flex flex-col transition-all duration-700 ease-out ${
        isVisible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-8 scale-95"
      }`}
      style={{
        transitionDelay: `${index * 100}ms`,
      }}
    >
      <div
        className="project-card-grain"
        style={{ backgroundImage: `url(${grainImage.src})` }}
      ></div>

      {/* Image container - negative margins to extend to card edges */}
      <div className="project-card-image-wrapper">
        <Image
          src={project.image}
          alt={project.title}
          className="project-card-image"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
        />
      </div>

      {/* Content area with consistent spacing */}
      <div className="relative z-20 flex flex-col grow pt-4 md:pt-5">
        {/* Company/Year badge */}
        <motion.div
          className="gradient-text-emerald-sky inline-flex font-semibold uppercase tracking-widest text-[10px] sm:text-[11px] gap-2"
          initial={{ opacity: 0, y: -10 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <span>{project.company}</span>
          <span>&bull;</span>
          <span>{project.year}</span>
        </motion.div>

        {/* Title with proper line height */}
        <motion.h3
          className="font-serif text-xl sm:text-2xl mt-2 md:mt-3 leading-snug"
          initial={{ opacity: 0, y: -10 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
          transition={{ delay: 0.25, duration: 0.5 }}
        >
          {project.title}
        </motion.h3>

        {/* Divider with consistent margin */}
        <hr className="border-t border-white/10 mt-3 md:mt-4" />

        {/* Results list - grow pushes button down */}
        <ul className="flex flex-col gap-2 md:gap-2.5 mt-3 md:mt-4 grow">
          {project.results.map((result, idx) => (
            <motion.li
              key={idx}
              className="flex items-start gap-2 text-sm md:text-[15px] text-white/70 leading-relaxed"
              initial={{ opacity: 0, x: -20 }}
              animate={
                isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
              }
              transition={{ delay: idx * 0.1 + 0.3, duration: 0.5 }}
            >
              <BadgeCheck className="w-4 h-4 md:w-5 md:h-5 shrink-0 mt-0.5 text-emerald-400/80" />
              <span>{result.title}</span>
            </motion.li>
          ))}
        </ul>

        {/* CTA Button - consistent top margin */}
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-4 md:mt-5"
        >
          <button className="btn-gradient-border group/btn">
            <span className="gradient-text-emerald">View Project</span>
            <ArrowUpRight className="w-4 h-4 text-emerald-400 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </button>
        </a>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="container py-16 md:py-20 lg:py-24">
      <SectionHeader
        title="Featured Projects"
        eyebrow="Real Problems, Real Solutions"
        description="Full-stack applications built with modern auth, AI integration, and scalable architecture."
      />
      {/* Mobile-first: single column, 2-column grid on md+ with consistent gaps */}
      <div className="grid grid-cols-1 gap-5 mt-10 md:grid-cols-2 md:gap-6 md:mt-12 lg:gap-8 lg:mt-14">
        {portfolioProjects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
