import React from "react";
import { footerLinks } from "../lib/data";

const Footer = () => {
  return (
    <div className="container">
      <div>
        <div>&copy; 2025 My Portfolio. All rights reserved.</div>
        <nav>
          {footerLinks.map((link) => (
            <a key={link.title} href={link.href} download={link.download}>
              {link.icon ? (
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="currentColor"
                >
                  <title>{link.title}</title>
                  <path d={link.icon.path} />
                </svg>
              ) : (
                link.title
              )}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Footer;
