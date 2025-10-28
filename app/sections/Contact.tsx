import { ArrowUpRight } from "lucide-react";
import grainImage from "@/app/assets/images/grain.jpg";

const Contact = () => {
  return (
    <div id="contact" className="py-16 lg:py-24 container pt-12">
      <div className="bg-linear-to-r from-emerald-400 to-sky-400 text-gray-900 py-8 px-10 md:py-12 lg:py-16 md:px-16 lg:px-20 rounded-3xl text-center md:text-left overflow-hidden relative z-0">
        <div
          className="absolute inset-0 opacity-10 -z-10"
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        ></div>
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
          <div className="flex-1">
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl">
              Let&apos;s create something amazing together!
            </h2>
            <p className="text-sm md:text-base mt-3 lg:mt-4">
              I&apos;m actively seeking new opportunities as a developer and
              would love to discuss how I can contribute to your team.
            </p>
          </div>
          <div className="shrink-0">
            <button className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 hover:bg-gray-800 transition-colors">
              <span className="font-semibold">Contact Me</span>
              <ArrowUpRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
