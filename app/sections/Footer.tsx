import React from "react";
import Image from "next/image";
import { footerLinks } from "../lib/data";

const Footer = () => {
  return (
    <footer className="relative -z-10">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 mask-[radial-gradient(50%_50%_at_bottom,black,transparent)] pointer-events-none -z-10">
      </div>
      <div className="container border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
        <div className="text-white/40">
          &copy; 2025 Tse-Hao Su. All rights reserved.
        </div>
        <nav className="flex flex-col md:flex-row md:justify-end items-center gap-8">
          {footerLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              download={link.download}
              className="inline-flex items-center gap-1.5 text-white/60"
            >
              <span>{link.title}</span>
              {link.icon && (
                <>
                  {typeof link.icon === "string" || "src" in link.icon ? (
                    <Image
                      src={link.icon}
                      alt={link.title}
                      width={20}
                      height={20}
                      className="w-5 h-5 opacity-40"
                    />
                  ) : (
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="currentColor"
                    >
                      <title className="font-semibold">{link.title}</title>
                      <path d={link.icon.path} />
                    </svg>
                  )}
                </>
              )}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;