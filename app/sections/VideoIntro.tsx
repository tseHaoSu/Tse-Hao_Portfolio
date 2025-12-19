"use client";

import SectionHeader from "@/app/components/SectionHeader";
import Card from "@/app/components/Card";

const VideoIntro = () => {
  const handleMouseEnter = () => {
    window.dispatchEvent(new CustomEvent("videoHover", { detail: true }));
  };

  const handleMouseLeave = () => {
    window.dispatchEvent(new CustomEvent("videoHover", { detail: false }));
  };

  return (
    <section id="video-intro" className="container py-12 md:py-16 lg:py-20">
      <SectionHeader
        eyebrow="introduction"
        title="See Me in Action"
        description="A quick video introduction to who I am and what I do."
      />
      <div className="mt-8 md:mt-12 lg:mt-16 max-w-4xl mx-auto">
        <Card className="overflow-hidden p-0">
          <div
            className="relative w-full z-20"
            style={{ paddingBottom: "56.25%" }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <iframe
              src="https://www.loom.com/embed/b732d362bfcf4eb89a1856753b978900?hideEmbedTopBar=true&hide_share=true&hide_title=true&hide_owner=true"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full rounded-3xl"
              title="Introduction Video"
            />
          </div>
        </Card>
      </div>
    </section>
  );
};

export default VideoIntro;
