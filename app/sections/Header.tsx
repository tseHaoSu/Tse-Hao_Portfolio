"use client";

import { motion } from "framer-motion";

const Header = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);

    if (element) {
      const offsetTop = element.offsetTop;
      window.scrollTo({
        top: offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex justify-center items-center fixed top-0 w-full pt-3 z-10">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex gap-0.5 sm:gap-1 p-0.5 border border-white/20 rounded-full bg-white/5 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-b before:from-white/10 before:to-transparent before:pointer-events-none relative text-xs sm:text-sm"
      >
        <a href="#home" onClick={(e) => handleScroll(e, "home")} className="nav-item relative z-10">
          Home
        </a>
        <a href="#projects" onClick={(e) => handleScroll(e, "projects")} className="nav-item relative z-10">
          Projects
        </a>
        <a href="#Testimonials" onClick={(e) => handleScroll(e, "Testimonials")} className="nav-item relative z-10">
          Testimonials
        </a>
        <a href="#about" onClick={(e) => handleScroll(e, "about")} className="nav-item relative z-10">
          About
        </a>
        <a
          href="#contact"
          onClick={(e) => handleScroll(e, "contact")}
          className="nav-item bg-white text-gray-900 hover:bg-white/90 hover:text-gray-900 relative z-10 shadow-lg"
        >
          Contact
        </a>
      </motion.nav>
    </div>
  );
};

export default Header;
