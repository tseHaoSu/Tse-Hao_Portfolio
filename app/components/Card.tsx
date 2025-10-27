import React from "react";
import grainImage from "@/app/assets/images/grain.jpg";
import { cn } from "@/app/lib/utils";

interface CardProps {
  className?: string;
  children?: React.ReactNode;
}

const Card = ({ className, children }: CardProps) => {
  return (
    <div className={cn("project-card", className)}>
      <div
        className="project-card-grain"
        style={{ backgroundImage: `url(${grainImage.src})` }}
      ></div>
      {children}
    </div>
  );
};

export default Card;
