"use client";

import { MousePointer2 } from "lucide-react";
import { useEffect, useState } from "react";

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [labelPosition, setLabelPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true); // Default to true to avoid flash
  const [isOverVideo, setIsOverVideo] = useState(false);

  // Detect mobile/touch devices
  useEffect(() => {
    const checkMobile = () => {
      const isTouchDevice =
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia("(pointer: coarse)").matches;
      const isSmallScreen = window.innerWidth < 1024;
      setIsMobile(isTouchDevice || isSmallScreen);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Listen for video hover events
  useEffect(() => {
    const handleVideoHover = (e: CustomEvent<boolean>) => {
      setIsOverVideo(e.detail);
    };

    window.addEventListener("videoHover", handleVideoHover as EventListener);

    return () => {
      window.removeEventListener(
        "videoHover",
        handleVideoHover as EventListener
      );
    };
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", updatePosition);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isMobile]);

  // Smooth follow effect for the label
  useEffect(() => {
    if (isMobile) return;

    const animate = () => {
      setLabelPosition((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.25,
        y: prev.y + (position.y - prev.y) * 0.25,
      }));
    };

    const animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [position, isMobile]);

  if (!isVisible || isMobile || isOverVideo) return null;

  return (
    <>
      {/* Mouse pointer - follows instantly */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-999"
        style={{
          transform: `translateX(${position.x}px) translateY(${position.y}px)`,
        }}
      >
        <MousePointer2
          className="h-6 w-6"
          style={{
            fill: "#10b981",
            color: "#10b981",
            stroke: "white",
            strokeWidth: "1.5px",
          }}
        />
      </div>

      {/* User label - follows with delay */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999] transition-transform duration-75 ease-out"
        style={{
          transform: `translateX(${labelPosition.x + 20}px) translateY(${
            labelPosition.y + 24
          }px)`,
        }}
      >
        <div
          className="px-1.5 py-0.5 rounded-md text-xs text-white font-semibold whitespace-nowrap drop-shadow-md"
          style={{ backgroundColor: "#10b981" }}
        >
          user
        </div>
      </div>
    </>
  );
};
