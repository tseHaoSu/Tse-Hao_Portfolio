import React from "react";

interface SectionHeaderProps {
  title: string;
  eyebrow: string;
  description: string;
}

const SectionHeader = ({ title, eyebrow, description }: SectionHeaderProps) => {
  return (
    <>
      <p className="uppercase font-semibold tracking-widest gradient-text-emerald text-center text-xs md:text-sm">
        {eyebrow}
      </p>
      <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-center mt-4 md:mt-5">
        {title}
      </h2>
      <p className="text-center text-white/60 mt-4 md:mt-6 max-w-md lg:max-w-lg mx-auto text-sm md:text-base">
        {description}
      </p>
    </>
  );
};

export default SectionHeader;
