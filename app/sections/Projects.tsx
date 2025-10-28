"use client";

import Image from "next/image";
import darkSaasLandingPage from "@/app/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/app/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/app/assets/images/ai-startup-landing-page.png";
import grainImage from "@/app/assets/images/grain.jpg";
import { ArrowUpRight, BadgeCheck } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const portfolioProjects = [
  {
    company: "Acme Corp",
    year: "2022",
    title: "Dark Saas Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
    image: darkSaasLandingPage,
  },
  {
    company: "Innovative Co",
    year: "2021",
    title: "Light Saas Landing Page",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://youtu.be/7hi5zwO75yc",
    image: lightSaasLandingPage,
  },
  {
    company: "Quantum Dynamics",
    year: "2023",
    title: "AI Startup Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: aiStartupLandingPage,
  },
];

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
          ? "opacity-0 -translate-x-32 scale-95"
          : "opacity-0 translate-x-32 scale-95"
      }`}
      style={{
        top: `${index * 20}px`,
        zIndex: portfolioProjects.length - index
      }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
    >
      <div
        className="project-card-grain"
        style={{ backgroundImage: `url(${grainImage.src})` }}
      ></div>
      <div className="lg:grid lg:grid-cols-2 lg:gap-16">
        <div className="relative z-20 lg:flex lg:flex-col lg:justify-center">
          <motion.div
            className="gradient-text-emerald-sky inline-flex font-bold uppercase tracking-widest text-xs md:text-sm gap-2"
            initial={{ opacity: 0, y: -10 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span>{project.company}</span>
            <span>&bull;</span>
            <span>{project.year}</span>
          </motion.div>
          <motion.h3
            className="font-serif text-xl md:text-2xl lg:text-3xl mt-2 md:mt-3"
            initial={{ opacity: 0, y: -10 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
            transition={{ delay: 0.25, duration: 0.5 }}
          >
            {project.title}
          </motion.h3>
          <hr className="border-t-2 border-white/5 mt-3 md:mt-4" />
          <ul className="flex flex-col gap-3 md:gap-4 mt-3 md:mt-4">
            {project.results.map((result, idx) => (
              <motion.li
                key={idx}
                className="flex items-center gap-2 md:gap-3 text-sm md:text-base lg:text-lg text-white/70"
                initial={{ opacity: 0, x: -20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: idx * 0.1 + 0.3, duration: 0.5 }}
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
              >
                <BadgeCheck className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 flex-shrink-0" />
                <span>{result.title}</span>
              </motion.li>
            ))}
          </ul>
          <motion.a
            href={project.link}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button className="btn-gradient-border group">
              <span className="gradient-text-emerald">View Project</span>
              <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4 text-emerald-400 transition-transform group-hover:animate-bounce" />
            </button>
          </motion.a>
        </div>
        <motion.div
          className="relative z-19 mt-6 md:mt-8 lg:mt-0 lg:-mr-[40%] lg:-mb-12 lg:ml-8 overflow-hidden rounded-xl"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <Image
            src={project.image}
            alt={project.title}
            className="w-full h-auto lg:w-[110%]"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <div className="container py-16 md:py-20 lg:py-28">
      <p className="uppercase font-semibold tracking-widest gradient-text-emerald text-center text-xs md:text-sm">
        Here are some of my recent projects:
      </p>
      <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-center mt-4 md:mt-5">
        Featured Projects
      </h2>
      <p className="text-center text-white/60 mt-4 md:mt-6 max-w-md lg:max-w-lg mx-auto text-sm md:text-base">
        See how I transformed these ideas into reality: blah blah blah blah blah
        blah blah blah blah blah blah blah blah blah blah blah blah blah blah
        blah blah blah blah blah blah.
      </p>
      {/**card box */}
      <div className="flex flex-col gap-8 md:gap-12 lg:gap-16 mt-10 md:mt-16 lg:mt-20">
        {portfolioProjects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
