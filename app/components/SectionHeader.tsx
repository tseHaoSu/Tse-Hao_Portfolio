import React from "react";

interface SectionHeaderProps {
  title: string;
  eyebrow: string;
  description: string;
}

const SectionHeader = ({ title, eyebrow, description }: SectionHeaderProps) => {
  return (
    <header className="text-center">
      <p className="uppercase font-semibold tracking-widest gradient-text-emerald text-[11px] md:text-xs">
        {eyebrow}
      </p>
      <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl mt-3 md:mt-4">
        {title}
      </h2>
      <p className="text-white/60 mt-3 md:mt-5 max-w-sm md:max-w-md lg:max-w-lg mx-auto text-sm md:text-base leading-relaxed">
        {description}
      </p>
    </header>
  );
};

export default SectionHeader;
