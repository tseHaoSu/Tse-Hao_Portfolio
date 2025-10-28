import Image from "next/image";
import { ArrowDown } from "lucide-react";
import memojiImage from "@/app/assets/images/memoji-computer.png";
import grainImage from "@/app/assets/images/grain.jpg";
import starIcon from "@/app/assets/icons/star.svg";

const Hero = () => {
  return (
    <div
      id="home"
      className="py-32 md:py-48 lg:min-h-screen lg:flex lg:items-center relative z-0 overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-5 -z-30"
        style={{
          backgroundImage: `url(${grainImage.src})`,
        }}
      ></div>

      <div className="absolute inset-0 -z-20 flex items-center justify-center">
        <div className="hero-ring size-[620px] border-2 shadow-[0_0_80px_0_inset] shadow-emerald-300/5"></div>
        <div className="hero-ring size-[820px] shadow-[0_0_60px_0_inset] shadow-emerald-300/5"></div>
        <div className="hero-ring size-[1020px] border-emerald-300/[0.03] shadow-[0_0_40px_0_inset] shadow-emerald-300/[0.03]"></div>
        <div className="hero-ring size-[1220px] border-emerald-300/[0.02] shadow-[0_0_20px_0_inset] shadow-emerald-300/[0.02]"></div>

        {/* Stars orbiting around the rings - 12 total: 30% large, 30% medium, 40% small */}
        {/* Ring 1 - 620px diameter (310px radius) - 3 stars */}
        <div className="absolute orbit-ring-1 size-16 opacity-25 star-pulse">
          <Image
            src={starIcon}
            alt=""
            className="w-full h-full"
            style={{
              filter:
                "invert(78%) sepia(23%) saturate(1000%) hue-rotate(98deg)",
            }}
          />
        </div>
        <div
          className="absolute orbit-ring-1 size-12 opacity-30 star-pulse"
          style={{ animationDelay: "-7s" }}
        >
          <Image
            src={starIcon}
            alt=""
            className="w-full h-full"
            style={{
              filter:
                "invert(78%) sepia(23%) saturate(1000%) hue-rotate(98deg)",
            }}
          />
        </div>
        <div
          className="absolute orbit-ring-1 size-8 opacity-35 star-pulse"
          style={{ animationDelay: "-14s" }}
        >
          <Image
            src={starIcon}
            alt=""
            className="w-full h-full"
            style={{
              filter:
                "invert(78%) sepia(23%) saturate(1000%) hue-rotate(98deg)",
            }}
          />
        </div>

        {/* Ring 2 - 820px diameter (410px radius) - 3 stars */}
        <div
          className="absolute orbit-ring-2 size-14 opacity-20 star-pulse"
          style={{ animationDelay: "-3s" }}
        >
          <Image
            src={starIcon}
            alt=""
            className="w-full h-full"
            style={{
              filter:
                "invert(78%) sepia(23%) saturate(1000%) hue-rotate(98deg)",
            }}
          />
        </div>
        <div
          className="absolute orbit-ring-2 size-10 opacity-25 star-pulse"
          style={{ animationDelay: "-12s" }}
        >
          <Image
            src={starIcon}
            alt=""
            className="w-full h-full"
            style={{
              filter:
                "invert(78%) sepia(23%) saturate(1000%) hue-rotate(98deg)",
            }}
          />
        </div>
        <div
          className="absolute orbit-ring-2 size-7 opacity-30 star-pulse"
          style={{ animationDelay: "-18s" }}
        >
          <Image
            src={starIcon}
            alt=""
            className="w-full h-full"
            style={{
              filter:
                "invert(78%) sepia(23%) saturate(1000%) hue-rotate(98deg)",
            }}
          />
        </div>

        {/* Ring 3 - 1020px diameter (510px radius) - 3 stars */}
        <div
          className="absolute orbit-ring-3 size-16 opacity-25 star-pulse"
          style={{ animationDelay: "-5s" }}
        >
          <Image
            src={starIcon}
            alt=""
            className="w-full h-full"
            style={{
              filter:
                "invert(78%) sepia(23%) saturate(1000%) hue-rotate(98deg)",
            }}
          />
        </div>
        <div
          className="absolute orbit-ring-3 size-13 opacity-20 star-pulse"
          style={{ animationDelay: "-15s" }}
        >
          <Image
            src={starIcon}
            alt=""
            className="w-full h-full"
            style={{
              filter:
                "invert(78%) sepia(23%) saturate(1000%) hue-rotate(98deg)",
            }}
          />
        </div>
        <div
          className="absolute orbit-ring-3 size-9 opacity-30 star-pulse"
          style={{ animationDelay: "-22s" }}
        >
          <Image
            src={starIcon}
            alt=""
            className="w-full h-full"
            style={{
              filter:
                "invert(78%) sepia(23%) saturate(1000%) hue-rotate(98deg)",
            }}
          />
        </div>

        {/* Ring 4 - 1220px diameter (610px radius) - 3 stars */}
        <div
          className="absolute orbit-ring-4 size-14 opacity-20 star-pulse"
          style={{ animationDelay: "-8s" }}
        >
          <Image
            src={starIcon}
            alt=""
            className="w-full h-full"
            style={{
              filter:
                "invert(78%) sepia(23%) saturate(1000%) hue-rotate(98deg)",
            }}
          />
        </div>
        <div
          className="absolute orbit-ring-4 size-12 opacity-25 star-pulse"
          style={{ animationDelay: "-20s" }}
        >
          <Image
            src={starIcon}
            alt=""
            className="w-full h-full"
            style={{
              filter:
                "invert(78%) sepia(23%) saturate(1000%) hue-rotate(98deg)",
            }}
          />
        </div>
        <div
          className="absolute orbit-ring-4 size-8 opacity-30 star-pulse"
          style={{ animationDelay: "-28s" }}
        >
          <Image
            src={starIcon}
            alt=""
            className="w-full h-full"
            style={{
              filter:
                "invert(78%) sepia(23%) saturate(1000%) hue-rotate(98deg)",
            }}
          />
        </div>
      </div>

      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={memojiImage}
            alt="Memoji-computer"
            className="size-[100px]"
          />
          <div className="flex flex-col items-center text-center mt-8">
            <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg mb-6">
              <div className="bg-green-500 size-2.5 rounded-full relative">
                <div className="absolute inset-0 bg-green-500 rounded-full animate-ping"></div>
              </div>
              <div className="text-sm font-medium">
                Available for new projects
              </div>
            </div>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl tracking-tight">
              Welcome to My Portfolio
            </h1>
            <p className="mt-4 text-white/60 md:text-lg max-w-2xl mx-auto">
              I&apos;m a coffee-fueled fullstack developer who turns complex
              ideas into bite-sized, beautiful experiences. When I&apos;m not
              crafting sleek UIs or obsessing over clean code at 2am, I&apos;m
              integrating cutting-edge AI to build web applications that just
              work—and look great doing it.
            </p>
            <div className="flex flex-col md:flex-row items-center gap-4 mt-8">
              <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl hover:bg-white/10 transition group">
                <span className="font-semibold">Explore my work</span>
                <ArrowDown className="w-4 h-4 group-hover:animate-bounce" />
              </button>
              <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 px-6 h-12 rounded-xl hover:bg-white/90 transition group">
                <span className="hand-wave group-hover:animate-[wave-spin_0.6s_ease-in-out]">
                  ✋
                </span>
                <span className="font-semibold">Let&apos;s connect!</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - only visible on lg screens */}
      <div className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 animate-bounce">
        <span className="text-white/60 text-sm font-medium">Scroll down</span>
        <ArrowDown className="w-6 h-6 text-emerald-400" />
      </div>
    </div>
  );
};

export default Hero;
